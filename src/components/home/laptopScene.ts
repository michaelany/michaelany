import {
  ACESFilmicToneMapping,
  Box3,
  CanvasTexture,
  Color,
  DirectionalLight,
  HemisphereLight,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  PMREMGenerator,
  Quaternion,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from 'three'
import {TrackballControls} from 'three/addons/controls/TrackballControls.js'
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js'

import {BANNER_IMAGES} from '#data/banner'
import {COLOR, DURATION} from '#styles/theme'
import {loadLaptopModel} from './loadLaptopModel'

export type LaptopScene = Awaited<ReturnType<typeof createLaptopScene>>

export const createLaptopScene = async (
  canvas: HTMLCanvasElement,
  onError: () => void,
  signal: AbortSignal
) => {
  const renderer = new WebGLRenderer({canvas, alpha: true, antialias: true})
  const cleanups: (() => void)[] = []
  let disposed = false
  let frame = 0
  const dispose = () => {
    if (disposed) return
    disposed = true
    cancelAnimationFrame(frame)
    cleanups.reverse().forEach(cleanup => cleanup())
    renderer.dispose()
  }

  try {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.outputColorSpace = SRGBColorSpace
    renderer.toneMapping = ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.15
    renderer.setClearColor(0, 0)

    const scene = new Scene()
    const camera = new PerspectiveCamera(35, 1, 0.1, 50)
    const displayCamera = new PerspectiveCamera()
    const screenCanvas = document.createElement('canvas')
    screenCanvas.width = 1024
    screenCanvas.height = Math.round((screenCanvas.width * 2234) / 3456)
    const context = screenCanvas.getContext('2d')
    if (!context) throw new Error('Canvas 2D is unavailable')
    const texture = new CanvasTexture(screenCanvas)
    texture.colorSpace = SRGBColorSpace
    texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4)
    cleanups.push(() => texture.dispose())

    const model = await loadLaptopModel(signal)
    cleanups.push(model.dispose)
    const {laptop, appleMaterial, screenMaterial} = model
    screenMaterial.map = texture
    screenMaterial.needsUpdate = true
    scene.add(laptop)

    const room = new RoomEnvironment()
    const pmrem = new PMREMGenerator(renderer)
    try {
      const environment = pmrem.fromScene(room, 0.04, 0.1, 100, {size: 128})
      scene.environment = environment.texture
      cleanups.push(() => environment.dispose())

      // A crisp studio reflection for the polished logo. Bake once; rotation
      // changes the reflected view without rendering another scene each frame.
      const reflectionRoom = new Scene()
      reflectionRoom.background = new Color('#11151c')
      const paneGeometry = new PlaneGeometry(1, 1)
      // Broad dark gradients and narrow highlights keep the reflection varied
      // even between window frames, where a flat light panel looked grey.
      const reflectionCanvas = document.createElement('canvas')
      reflectionCanvas.width = 512
      reflectionCanvas.height = 512
      const reflectionContext = reflectionCanvas.getContext('2d')
      if (!reflectionContext) throw new Error('Canvas 2D is unavailable')
      const gradient = reflectionContext.createLinearGradient(0, 0, 512, 320)
      for (const [offset, color] of [
        [0, '#11151c'],
        [0.16, '#596371'],
        [0.3, '#1b222c'],
        [0.43, '#394451'],
        [0.49, '#bbc3cd'],
        [0.54, '#84909f'],
        [0.62, '#232a35'],
        [0.8, '#596371'],
        [1, '#0d1118'],
      ] as const) {
        gradient.addColorStop(offset, color)
      }
      reflectionContext.fillStyle = gradient
      reflectionContext.fillRect(0, 0, 512, 512)
      const reflectionTexture = new CanvasTexture(reflectionCanvas)
      reflectionTexture.colorSpace = SRGBColorSpace
      const paneMaterial = new MeshBasicMaterial({map: reflectionTexture})
      const frameMaterial = new MeshBasicMaterial({color: '#080b10'})
      try {
        for (const [x, y, z, rotationX, rotationY] of [
          [0, 0, -6, 0, 0],
          [6, 0, 0, 0, -Math.PI / 2],
          [-6, 0, 0, 0, Math.PI / 2],
          [0, 0, 6, 0, Math.PI],
          [0, 6, 0, Math.PI / 2, 0],
          [0, -6, 0, -Math.PI / 2, 0],
        ]) {
          const pane = new Mesh(paneGeometry, paneMaterial)
          pane.position.set(x, y, z)
          pane.rotation.set(rotationX, rotationY, 0)
          pane.scale.set(12, 12, 1)
          for (const y of [-0.18, 0.1]) {
            const frame = new Mesh(paneGeometry, frameMaterial)
            frame.position.set(0, y, 0.002)
            frame.scale.set(1, 0.055, 1)
            pane.add(frame)
          }
          const upright = new Mesh(paneGeometry, frameMaterial)
          upright.position.set(0.16, 0, 0.003)
          upright.scale.set(0.035, 1, 1)
          pane.add(upright)
          reflectionRoom.add(pane)
        }
        const logoEnvironment = pmrem.fromScene(reflectionRoom, 0, 0.1, 100, {
          size: 256,
        })
        appleMaterial.envMap = logoEnvironment.texture
        cleanups.push(() => logoEnvironment.dispose())
      } finally {
        paneGeometry.dispose()
        paneMaterial.dispose()
        reflectionTexture.dispose()
        frameMaterial.dispose()
      }
    } finally {
      room.dispose()
      pmrem.dispose()
    }
    scene.add(new HemisphereLight(COLOR.white, COLOR.text, 2))
    const light = new DirectionalLight(COLOR.white, 3)
    light.position.set(-3, 6, 5)
    scene.add(light)

    const bounds = new Box3().setFromObject(laptop)
    const center = bounds.getCenter(new Vector3())
    const corners = [bounds.min.x, bounds.max.x].flatMap(x =>
      [bounds.min.y, bounds.max.y].flatMap(y =>
        [bounds.min.z, bounds.max.z].map(z => new Vector3(x, y, z).sub(center))
      )
    )
    const maxMagnification = 1.2
    let bottomExtent = 1
    const initialDirection = new Vector3(2.4, 2, 7).normalize()
    let initialDistance = 0
    camera.position.copy(center).addScaledVector(initialDirection, 10)
    const createControls = () => {
      const controls = new TrackballControls(camera, canvas)
      controls.target.copy(center)
      controls.noPan = true
      controls.noZoom = false
      controls.zoomSpeed = 0.75
      controls.rotateSpeed = 1.4
      controls.dynamicDampingFactor = 0.16
      controls.keys = ['', '', '']
      controls.mouseButtons.MIDDLE = null
      controls.mouseButtons.RIGHT = null
      // Horizontal dragging rotates on touchscreens; vertical swipes scroll.
      canvas.style.touchAction = 'pan-y'
      return controls
    }
    let controls = createControls()
    cleanups.push(() => controls.dispose())

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let paused = reducedMotion.matches
    let visible = false
    let elapsed = 0
    let previousTime = 0
    let previousScreenTime = 0
    let dirty = true
    let lastScreen = ''
    let images: HTMLImageElement[] = []
    const invalidate = () => {
      dirty = true
    }
    let hovered =
      canvas.matches(':hover') && window.matchMedia('(hover: hover)').matches
    let keyboardFocused = false
    let interacting = false
    let idleElapsed = 0
    let idleWeight = 0
    let idleCooldown = 0
    let idleApplied = false
    const idleDelay = DURATION.longest * 3
    let returnPending = false
    let returnDelay = 0
    let returning = false
    let returnElapsed = 0
    let returnDistance = 0
    const returnRotation = new Quaternion()

    const cancelReturn = () => {
      returnPending = false
      returning = false
    }
    const scheduleReturn = () => {
      returnPending = true
      returnDelay = DURATION.longest
    }

    const stopIdle = () => {
      // Hand over the exact visible pose, without resetting the user's view.
      if (idleApplied) {
        camera.position.copy(displayCamera.position)
        camera.up.copy(displayCamera.up)
        camera.lookAt(center)
      }
      idleApplied = false
      idleWeight = 0
      idleElapsed = 0
      idleCooldown = idleDelay
      invalidate()
    }
    const handleStart = () => {
      cancelReturn()
      stopIdle()
      keyboardFocused = false
      interacting = true
    }
    const handleEnd = () => {
      interacting = false
      idleCooldown = idleDelay
      scheduleReturn()
    }
    const bindControls = () => {
      controls.addEventListener('change', invalidate)
      controls.addEventListener('start', handleStart)
      controls.addEventListener('end', handleEnd)
    }
    bindControls()
    const replaceControls = () => {
      const {minDistance, maxDistance} = controls
      controls.dispose()
      controls = createControls()
      controls.minDistance = minDistance
      controls.maxDistance = maxDistance
      controls.staticMoving = reducedMotion.matches
      bindControls()
      camera.lookAt(center)
    }

    const handleEnter = (event: PointerEvent) => {
      if (event.pointerType !== 'touch') hovered = true
    }
    const handleLeave = () => {
      hovered = false
      idleCooldown = idleDelay
    }
    const handleFocus = () => {
      keyboardFocused = canvas.matches(':focus-visible')
    }
    const handleBlur = () => {
      keyboardFocused = false
      idleCooldown = idleDelay
    }
    canvas.addEventListener('pointerenter', handleEnter)
    canvas.addEventListener('pointerleave', handleLeave)
    canvas.addEventListener('pointercancel', handleEnd)
    canvas.addEventListener('focus', handleFocus)
    canvas.addEventListener('blur', handleBlur)
    cleanups.push(() => {
      canvas.removeEventListener('pointerenter', handleEnter)
      canvas.removeEventListener('pointerleave', handleLeave)
      canvas.removeEventListener('pointercancel', handleEnd)
      canvas.removeEventListener('focus', handleFocus)
      canvas.removeEventListener('blur', handleBlur)
    })

    const handleMotion = () => {
      controls.staticMoving = reducedMotion.matches
      if (reducedMotion.matches) {
        paused = true
        stopIdle()
      }
      invalidate()
    }
    reducedMotion.addEventListener('change', handleMotion)
    cleanups.push(() =>
      reducedMotion.removeEventListener('change', handleMotion)
    )
    handleMotion()

    const getFitDistance = (direction: Vector3, cameraUp: Vector3) => {
      const halfFov = (camera.fov * Math.PI) / 360
      const right = new Vector3().crossVectors(cameraUp, direction).normalize()
      const up = new Vector3().crossVectors(direction, right).normalize()
      return (
        Math.max(
          ...corners.map(corner => {
            const depth = corner.dot(direction)
            return Math.max(
              Math.abs(corner.dot(right)) /
                (Math.tan(halfFov) * camera.aspect) +
                depth,
              Math.abs(corner.dot(up)) / Math.tan(halfFov) + depth
            )
          })
        ) * 1.02
      )
    }
    const getMinimumDistance = (direction: Vector3, cameraUp: Vector3) => {
      const right = new Vector3().crossVectors(cameraUp, direction).normalize()
      const up = new Vector3().crossVectors(direction, right).normalize()
      const bottomSlope = Math.tan((camera.fov * Math.PI) / 360) * bottomExtent
      const bottomDistance =
        Math.max(
          ...corners.map(
            corner => corner.dot(direction) - corner.dot(up) / bottomSlope
          )
        ) * 1.02
      return Math.max(
        getFitDistance(direction, cameraUp) / maxMagnification,
        bottomDistance
      )
    }
    const constrainZoom = () => {
      const offset = camera.position.clone().sub(center)
      const distance = offset.length()
      offset.normalize()
      controls.minDistance = getMinimumDistance(offset, camera.up)
      // Cropping is allowed at the top and sides, but keep the bottom in view.
      if (distance < controls.minDistance) {
        camera.position
          .copy(center)
          .addScaledVector(offset, controls.minDistance)
        camera.lookAt(center)
        invalidate()
      }
    }
    const updateIdle = (delta: number) => {
      idleCooldown = Math.max(0, idleCooldown - delta)
      const active =
        !hovered &&
        !keyboardFocused &&
        !interacting &&
        !returnPending &&
        !returning &&
        !paused &&
        !reducedMotion.matches &&
        idleCooldown === 0
      const previousWeight = idleWeight
      idleWeight +=
        ((active ? 1 : 0) - idleWeight) *
        (1 - Math.exp(-delta / DURATION.short))
      if (!active && idleWeight < 0.001) idleWeight = 0

      // Controls retain their base pose; the idle offset only affects rendering.
      displayCamera.copy(camera)
      idleApplied = idleWeight > 0
      if (idleApplied) {
        idleElapsed += delta
        const phase = (idleElapsed / (DURATION.lingering * 3)) * Math.PI * 2
        const offset = camera.position.clone().sub(center)
        const right = new Vector3().crossVectors(camera.up, offset).normalize()
        const yaw = ((Math.sin(phase) * Math.PI) / 30) * idleWeight
        const pitch = ((Math.sin(phase * 2) * Math.PI) / 90) * idleWeight
        offset.applyAxisAngle(camera.up, yaw).applyAxisAngle(right, pitch)
        displayCamera.up.applyAxisAngle(right, pitch)
        const minimumDistance = getMinimumDistance(
          offset.clone().normalize(),
          displayCamera.up
        )
        offset.setLength(Math.max(offset.length(), minimumDistance))
        displayCamera.position.copy(center).add(offset)
        displayCamera.lookAt(center)
        invalidate()
      } else {
        idleElapsed = 0
        if (previousWeight > 0) invalidate()
      }
    }
    const fitCamera = (resetZoom = false) => {
      const zoomRatio =
        !resetZoom && initialDistance
          ? camera.position.distanceTo(center) / initialDistance
          : 1
      initialDistance = getFitDistance(initialDirection, new Vector3(0, 1, 0))
      controls.maxDistance = initialDistance * 2.5
      const distance = Math.min(
        controls.maxDistance,
        initialDistance * zoomRatio
      )
      camera.position
        .sub(controls.target)
        .setLength(distance)
        .add(controls.target)
      camera.lookAt(controls.target)
      constrainZoom()
    }
    const resize = () => {
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      if (!width || !height) return
      renderer.setSize(width, height, false)
      // Extend the original square view downward, preserving its top edge,
      // horizontal framing, and apparent model size.
      camera.setViewOffset(width, width, 0, 0, width, height)
      bottomExtent = (2 * height) / width - 1
      fitCamera()
      controls.handleResize()
      invalidate()
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    cleanups.push(() => resizeObserver.disconnect())
    resize()
    const homeRotation = camera.quaternion.clone()
    const updateReturn = (delta: number) => {
      if (interacting) return
      if (returnPending) {
        returnDelay = Math.max(0, returnDelay - delta)
        if (returnDelay > 0) return
        returnPending = false
        stopIdle()
        // Clear drag inertia before moving back along a smooth orbital path.
        replaceControls()
        returnRotation.copy(camera.quaternion)
        returnDistance = camera.position.distanceTo(center)
        returnElapsed = 0
        returning = true
      }
      if (!returning) return
      returnElapsed += delta
      const progress = reducedMotion.matches
        ? 1
        : Math.min(returnElapsed / DURATION.longest, 1)
      const eased = progress * progress * (3 - 2 * progress)
      camera.quaternion.slerpQuaternions(returnRotation, homeRotation, eased)
      const distance =
        returnDistance + (initialDistance - returnDistance) * eased
      camera.position
        .set(0, 0, 1)
        .applyQuaternion(camera.quaternion)
        .multiplyScalar(distance)
        .add(center)
      camera.up.set(0, 1, 0).applyQuaternion(camera.quaternion)
      constrainZoom()
      invalidate()
      if (progress === 1) {
        returning = false
        idleCooldown = 0
        camera.up.set(0, 1, 0)
        camera.lookAt(center)
      }
    }

    const drawScreen = () => {
      const count = images.length
      const current = count ? Math.floor(elapsed / DURATION.longest) % count : 0
      const phase = elapsed % DURATION.longest
      const progress = Math.max(
        0,
        (phase - (DURATION.longest - DURATION.long)) / DURATION.long
      )
      const mix = reducedMotion.matches
        ? 0
        : progress * progress * (3 - 2 * progress)
      const screenKey = `${count}:${current}:${mix.toFixed(3)}`
      if (screenKey === lastScreen) return
      lastScreen = screenKey

      const background = context.createLinearGradient(
        0,
        0,
        screenCanvas.width,
        screenCanvas.height
      )
      background.addColorStop(0, COLOR.text)
      background.addColorStop(1, '#10151d')
      context.fillStyle = background
      context.fillRect(0, 0, screenCanvas.width, screenCanvas.height)
      const drawLogo = (image: HTMLImageElement, opacity: number) => {
        const scale = Math.min(
          420 / image.naturalWidth,
          420 / image.naturalHeight
        )
        const width = image.naturalWidth * scale
        const height = image.naturalHeight * scale
        context.globalAlpha = opacity
        context.drawImage(
          image,
          (screenCanvas.width - width) / 2,
          (screenCanvas.height - height) / 2,
          width,
          height
        )
      }
      if (count) {
        drawLogo(images[current], 1 - mix)
        if (mix) drawLogo(images[(current + 1) % count], mix)
      }
      context.globalAlpha = 1
      texture.needsUpdate = true
      invalidate()
    }

    const loadedImages = BANNER_IMAGES.map(src => {
      const image = new Image()
      image.src = src
      return image
        .decode()
        .then(() => image)
        .catch(() => null)
    })
    Promise.all(loadedImages).then(loaded => {
      if (disposed) return
      images = loaded.filter(image => image !== null)
      if (!images.length) onError()
      else invalidate()
    })

    const render = (time: number) => {
      frame = 0
      if (disposed || !visible || document.hidden) return
      frame = requestAnimationFrame(render)
      const delta = previousTime ? time - previousTime : 0
      previousTime = time
      if (!paused) elapsed += Math.min(delta, 100)
      // Keep inertia consistent on displays with different refresh rates.
      controls.dynamicDampingFactor =
        1 -
        Math.pow(
          1 - 0.16,
          Math.min(delta || DURATION.longer / 60, 100) / (DURATION.longer / 60)
        )
      if (!returning) controls.update()
      if (dirty) constrainZoom()
      updateReturn(Math.min(delta, 100))
      updateIdle(Math.min(delta, 100))
      // Texture uploads are independent of the full-rate camera animation.
      if (paused || time - previousScreenTime >= DURATION.longer / 30) {
        drawScreen()
        previousScreenTime = time
      }
      if (!dirty) return
      dirty = false
      try {
        renderer.render(scene, displayCamera)
      } catch {
        onError()
      }
    }
    const updateActivity = () => {
      cancelAnimationFrame(frame)
      frame = 0
      previousTime = 0
      if (visible && !document.hidden && !disposed)
        frame = requestAnimationFrame(render)
    }
    const visibilityObserver = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting)
      updateActivity()
    })
    visibilityObserver.observe(canvas)
    document.addEventListener('visibilitychange', updateActivity)
    // Trackball coordinates change when the page scrolls, even without a resize.
    const handleScroll = () => controls.handleResize()
    window.addEventListener('scroll', handleScroll, {
      passive: true,
      capture: true,
    })
    cleanups.push(() => {
      visibilityObserver.disconnect()
      document.removeEventListener('visibilitychange', updateActivity)
      window.removeEventListener('scroll', handleScroll, true)
    })
    const handleContextLoss = (event: Event) => {
      event.preventDefault()
      onError()
    }
    canvas.addEventListener('webglcontextlost', handleContextLoss)
    cleanups.push(() =>
      canvas.removeEventListener('webglcontextlost', handleContextLoss)
    )

    const reset = () => {
      // Recreate controls to discard any remaining drag inertia as well.
      cancelReturn()
      stopIdle()
      camera.up.set(0, 1, 0)
      camera.position.copy(center).add(initialDirection)
      replaceControls()
      fitCamera(true)
      invalidate()
    }
    drawScreen()
    renderer.render(scene, camera)

    return {
      dispose,
      handleKey: (key: string) => {
        if (key === ' ') {
          cancelReturn()
          stopIdle()
          paused = !paused
          return true
        }
        if (key === 'Home') {
          reset()
          return true
        }
        if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(key))
          return false
        cancelReturn()
        stopIdle()
        scheduleReturn()
        keyboardFocused = true
        const offset = camera.position.clone().sub(controls.target)
        const horizontal = key === 'ArrowLeft' || key === 'ArrowRight'
        const axis = horizontal
          ? camera.up.clone()
          : new Vector3().crossVectors(camera.up, offset).normalize()
        const angle = (key === 'ArrowLeft' || key === 'ArrowUp' ? 1 : -1) * 0.15
        offset.applyAxisAngle(axis, angle)
        camera.up.applyAxisAngle(axis, angle)
        camera.position.copy(controls.target).add(offset)
        controls.update()
        invalidate()
        return true
      },
    }
  } catch (error) {
    dispose()
    throw error
  }
}
