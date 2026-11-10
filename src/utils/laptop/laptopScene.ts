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
  Ray,
  Scene,
  SRGBColorSpace,
  Vector3,
  WebGLRenderer,
} from 'three'
import {TrackballControls} from 'three/addons/controls/TrackballControls.js'
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js'

import {BANNER_IMAGES} from '#data/banner'
import {COLOR, DURATION} from '#styles/tokens'
import {loadLaptopModel} from './loadLaptopModel'

interface ILaptopSceneOptions {
  canvas: HTMLCanvasElement
  interaction: HTMLDivElement
  lidHotspot: HTMLButtonElement
  signal: AbortSignal
  onError: () => void
  onPlayingChange: (isPlaying: boolean) => void
}

export type TLaptopScene = Awaited<ReturnType<typeof createLaptopScene>>

const maxRenderPixels = 2_000_000
const minRenderScale = 0.5
const targetFrameTime = 1000 / 60
const touchDragDistance = 8
const controlsDamping = 0.16
const maxFrameDelta = 100
const screenWidth = 1024
const screenLogoSize = 420
const idleDelay = DURATION.longest * 3
const logoReflectionColors = [
  [0, '#11151c'],
  [0.16, '#596371'],
  [0.3, '#1b222c'],
  [0.43, '#394451'],
  [0.49, '#bbc3cd'],
  [0.54, '#84909f'],
  [0.62, '#232a35'],
  [0.8, '#596371'],
  [1, '#0d1118'],
] as const
const logoReflectionPanes = [
  [0, 0, -6, 0, 0],
  [6, 0, 0, 0, -Math.PI / 2],
  [-6, 0, 0, 0, Math.PI / 2],
  [0, 0, 6, 0, Math.PI],
  [0, 6, 0, Math.PI / 2, 0],
  [0, -6, 0, -Math.PI / 2, 0],
] as const

const smoothStep = (progress: number) =>
  progress * progress * (3 - 2 * progress)

const loadImage = async (
  src: string,
  signal: AbortSignal,
  isBackgroundLoad = false
) => {
  if (signal.aborted) return null
  const image = new Image()
  const handleAbort = () => image.removeAttribute('src')
  signal.addEventListener('abort', handleAbort, {once: true})
  image.fetchPriority = isBackgroundLoad ? 'low' : 'high'
  image.decoding = 'async'
  image.src = src
  try {
    await image.decode()
    return signal.aborted ? null : image
  } catch {
    return null
  } finally {
    signal.removeEventListener('abort', handleAbort)
  }
}

const createCanvas = (width: number, height: number) => {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')
  if (!context) throw new Error('Canvas 2D is unavailable')
  return {canvas, context}
}

const createScreen = () => {
  const {canvas: screenCanvas, context} = createCanvas(
    screenWidth,
    Math.round((screenWidth * 2234) / 3456)
  )
  const screenBackground = context.createLinearGradient(
    0,
    0,
    screenCanvas.width,
    screenCanvas.height
  )
  screenBackground.addColorStop(0, COLOR.charcoal)
  screenBackground.addColorStop(1, '#10151d')
  const texture = new CanvasTexture(screenCanvas)
  texture.colorSpace = SRGBColorSpace

  let lastScreen = ''

  const drawLogo = (image: HTMLImageElement, opacity: number) => {
    const scale = Math.min(
      screenLogoSize / image.naturalWidth,
      screenLogoSize / image.naturalHeight
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
  const drawScreen = (
    images: HTMLImageElement[],
    elapsed: number,
    isReducedMotion: boolean
  ) => {
    const count = images.length
    const current = Math.floor(elapsed / DURATION.longest) % count
    const phase = elapsed % DURATION.longest
    const progress = Math.max(
      0,
      (phase - (DURATION.longest - DURATION.long)) / DURATION.long
    )
    const mix = isReducedMotion || count < 2 ? 0 : smoothStep(progress)
    const screenKey = `${count}:${current}:${mix.toFixed(3)}`
    if (screenKey === lastScreen) return false
    lastScreen = screenKey

    context.fillStyle = screenBackground
    context.fillRect(0, 0, screenCanvas.width, screenCanvas.height)
    drawLogo(images[current], 1 - mix)
    if (mix) drawLogo(images[(current + 1) % count], mix)
    context.globalAlpha = 1
    texture.needsUpdate = true
    return true
  }

  return {texture, draw: drawScreen}
}

const createLogoEnvironment = (pmrem: PMREMGenerator) => {
  const reflectionRoom = new Scene()
  reflectionRoom.background = new Color('#11151c')
  const {canvas: reflectionCanvas, context: reflectionContext} = createCanvas(
    512,
    512
  )
  const gradient = reflectionContext.createLinearGradient(0, 0, 512, 320)
  for (const [offset, color] of logoReflectionColors) {
    gradient.addColorStop(offset, color)
  }
  reflectionContext.fillStyle = gradient
  reflectionContext.fillRect(0, 0, 512, 512)
  const reflectionTexture = new CanvasTexture(reflectionCanvas)
  reflectionTexture.colorSpace = SRGBColorSpace
  const paneGeometry = new PlaneGeometry(1, 1)
  const paneMaterial = new MeshBasicMaterial({map: reflectionTexture})
  const frameMaterial = new MeshBasicMaterial({color: '#080b10'})
  try {
    for (const [x, y, z, rotationX, rotationY] of logoReflectionPanes) {
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
    return pmrem.fromScene(reflectionRoom, 0, 0.1, 100, {
      size: 256,
    })
  } finally {
    paneGeometry.dispose()
    paneMaterial.dispose()
    reflectionTexture.dispose()
    frameMaterial.dispose()
  }
}

const createControls = (
  camera: PerspectiveCamera,
  interaction: HTMLDivElement,
  target: Vector3,
  isEnabled: boolean
) => {
  const controls = new TrackballControls(camera, interaction)
  controls.enabled = isEnabled
  controls.target.copy(target)
  controls.noPan = true
  controls.zoomSpeed = 0.75
  controls.rotateSpeed = 1.4
  controls.dynamicDampingFactor = controlsDamping
  controls.keys = ['', '', '']
  controls.mouseButtons.MIDDLE = null
  controls.mouseButtons.RIGHT = null
  interaction.style.touchAction = isEnabled ? 'pan-y' : 'auto'
  return controls
}

export const createLaptopScene = async ({
  canvas,
  interaction,
  lidHotspot,
  signal,
  onError,
  onPlayingChange,
}: ILaptopSceneOptions) => {
  signal.throwIfAborted()
  const renderer = new WebGLRenderer({canvas, alpha: true, antialias: true})
  const events = new AbortController()
  const eventOptions = {signal: events.signal}
  const pointerOptions = {capture: true, signal: events.signal}
  const cleanups: (() => void)[] = []
  let isDisposed = false
  let frame = 0
  const dispose = () => {
    if (isDisposed) return
    isDisposed = true
    events.abort()
    cancelAnimationFrame(frame)
    cleanups.reverse().forEach(cleanup => cleanup())
    renderer.dispose()
    if (!renderer.getContext().isContextLost()) renderer.forceContextLoss()
  }

  try {
    signal.addEventListener('abort', dispose, {
      once: true,
      signal: events.signal,
    })
    const handleContextLoss = (e: Event) => {
      e.preventDefault()
      dispose()
      onError()
    }
    canvas.addEventListener('webglcontextlost', handleContextLoss, eventOptions)
    const stage = canvas.parentElement
    if (!stage) throw new Error('Laptop stage is unavailable')

    renderer.outputColorSpace = SRGBColorSpace
    renderer.toneMapping = ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.15
    renderer.setClearColor(0, 0)

    const scene = new Scene()
    const camera = new PerspectiveCamera(35, 1, 1, 50)
    const idleCamera = camera.clone()
    const screen = createScreen()
    screen.texture.anisotropy = Math.min(
      renderer.capabilities.getMaxAnisotropy(),
      4
    )
    cleanups.push(() => screen.texture.dispose())

    const firstImage = loadImage(BANNER_IMAGES[0], events.signal)
    const model = await loadLaptopModel(events.signal)
    if (isDisposed) model.dispose()
    events.signal.throwIfAborted()
    cleanups.push(model.dispose)
    const {
      laptop,
      chassis,
      lid,
      hinge,
      lidCamera,
      appleMaterial,
      screenMaterial,
    } = model
    screenMaterial.map = screen.texture
    screenMaterial.needsUpdate = true
    scene.add(laptop)

    const closedAngle = Math.PI / 2 - lid.rotation.x

    const room = new RoomEnvironment()
    const pmrem = new PMREMGenerator(renderer)
    try {
      const environment = pmrem.fromScene(room, 0.04, 0.1, 100, {size: 128})
      scene.environment = environment.texture
      cleanups.push(() => environment.dispose())

      const logoEnvironment = createLogoEnvironment(pmrem)
      appleMaterial.envMap = logoEnvironment.texture
      cleanups.push(() => logoEnvironment.dispose())
    } finally {
      room.dispose()
      pmrem.dispose()
    }
    scene.add(new HemisphereLight(COLOR.white, COLOR.charcoal, 2))
    const light = new DirectionalLight(COLOR.white, 3)
    light.position.set(-3, 6, 5)
    scene.add(light)

    const bounds = new Box3()
    const center = new Vector3()
    const initialDirection = new Vector3(2.4, 2, 7).normalize()
    const initialRight = new Vector3()
      .crossVectors(new Vector3(0, 1, 0), initialDirection)
      .normalize()
    const initialUp = new Vector3().crossVectors(initialDirection, initialRight)
    const viewOffset = new Vector3()
    const viewRight = new Vector3()
    const previousCenter = new Vector3()
    const corners = Array.from({length: 8}, () => new Vector3())
    const chassisBounds = new Box3()
    const hotspotPosition = new Vector3()
    const hotspotNormal = new Vector3()
    const hotspotDirection = new Vector3()
    const hotspotProjection = new Vector3()
    const occlusionPoint = new Vector3()
    const hotspotRay = new Ray()
    const returnRotation = new Quaternion()
    const homeRotation = new Quaternion()
    const reducedMotionQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )
    const pointers = new Map<
      number,
      {x: number; y: number; startX: number; startY: number}
    >()

    let radius = 0
    let initialDistance = 0
    let lidTarget = 0
    let lidVelocity = 0
    let isManualControlEnabled = false
    let hoverPointer: {x: number; y: number} | null = null
    let touchGesture: 'pending' | 'rotate' | 'scroll' | 'zoom' | null = null

    let isPlaying = !reducedMotionQuery.matches
    let animationSpeed = 1
    let slidesPauseAt: number | null = null
    let isStarted = false
    let isVisible = false
    let elapsed = 0
    let previousTime = 0
    let lastAutoFrame = 0
    let controlsUntil = 0
    let previousScreenTime = 0
    let isDirty = true
    const images: HTMLImageElement[] = []
    let firstImageIndex = 0

    let isViewChangedByUser = false
    let idleElapsed = 0
    let idleWeight = 0
    let idleCooldown = 0
    let returnState: 'none' | 'pending' | 'active' = 'none'
    let returnElapsed = 0
    let returnDistance = 0

    let stageWidth = 0
    let stageHeight = 0
    let surfaceWidth = 0
    let surfaceHeight = 0
    let renderScale = 1
    let sampleTime = 0
    let sampleFrames = 0
    let stableTime = 0

    const updateBounds = () => {
      bounds.setFromObject(laptop)
      bounds.getCenter(center)
      let index = 0
      for (const x of [bounds.min.x, bounds.max.x]) {
        for (const y of [bounds.min.y, bounds.max.y]) {
          for (const z of [bounds.min.z, bounds.max.z]) {
            corners[index++].set(x, y, z).sub(center)
          }
        }
      }
      radius = Math.max(...corners.map(corner => corner.length()))
    }
    updateBounds()
    chassisBounds.setFromObject(chassis)
    camera.position.copy(center).addScaledVector(initialDirection, 10)
    let controls = createControls(
      camera,
      interaction,
      center,
      isManualControlEnabled
    )
    cleanups.push(() => controls.dispose())

    const updateHotspotHover = () => {
      const isHovered =
        isManualControlEnabled &&
        hoverPointer !== null &&
        pointers.size === 0 &&
        document.elementFromPoint(hoverPointer.x, hoverPointer.y) === lidHotspot
      lidHotspot.classList.toggle('Laptop-LidHotspot_hovered', isHovered)
    }
    const clearHotspotHover = () => {
      hoverPointer = null
      updateHotspotHover()
    }
    const updateHotspot = (viewCamera: PerspectiveCamera) => {
      if (!isManualControlEnabled) return
      hotspotPosition.copy(lidCamera.position).applyMatrix4(lid.matrixWorld)
      hotspotDirection.copy(viewCamera.position).sub(hotspotPosition)
      hotspotNormal.set(0, 0, 1).transformDirection(lid.matrixWorld)
      const isFacingCamera = hotspotNormal.dot(hotspotDirection) >= 0
      hotspotPosition.copy(lidCamera.position)
      hotspotPosition.z = isFacingCamera ? 0.05 : -0.045
      hotspotPosition.applyMatrix4(lid.matrixWorld)
      hotspotProjection.copy(hotspotPosition).project(viewCamera)
      hotspotDirection
        .copy(hotspotPosition)
        .sub(viewCamera.position)
        .normalize()
      hotspotRay.set(viewCamera.position, hotspotDirection)
      const isBlocked =
        hotspotRay.intersectBox(chassisBounds, occlusionPoint) !== null &&
        viewCamera.position.distanceTo(occlusionPoint) <
          viewCamera.position.distanceTo(hotspotPosition) - 0.01
      const isInView =
        Math.abs(hotspotProjection.x) < 1 &&
        Math.abs(hotspotProjection.y) < 1 &&
        Math.abs(hotspotProjection.z) < 1
      lidHotspot.classList.toggle(
        'Laptop-LidHotspot_visible',
        isInView && !isBlocked
      )
      const x = (stageWidth + hotspotProjection.x * surfaceWidth) / 2
      const y = (stageHeight - hotspotProjection.y * surfaceHeight) / 2
      lidHotspot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      lidHotspot.style.setProperty(
        '--laptop-hotspot-scale',
        String(
          Math.min(stageWidth / 600, 1) *
            Math.min(
              initialDistance / viewCamera.position.distanceTo(center),
              1
            )
        )
      )
      updateHotspotHover()
    }
    const requestFrame = () => {
      if (frame || isDisposed || !isStarted || !isVisible || document.hidden)
        return
      frame = requestAnimationFrame(render)
    }
    const invalidate = () => {
      isDirty = true
      requestFrame()
    }
    const setIsPlaying = (isNextPlaying: boolean) => {
      if (isPlaying === isNextPlaying) return
      isPlaying = isNextPlaying
      if (isPlaying && isViewChangedByUser && returnState === 'none') {
        stopIdle()
        idleCooldown = 0
        returnState = 'pending'
      }
      if (pointers.size === 0) replaceControls()
      const phase = elapsed % DURATION.longest
      slidesPauseAt =
        !isPlaying &&
        images.length > 1 &&
        !reducedMotionQuery.matches &&
        phase > DURATION.longest - DURATION.long
          ? elapsed + DURATION.longest - phase
          : null
      onPlayingChange(isPlaying)
      invalidate()
    }
    const isLidMoving = () =>
      hinge.rotation.x !== lidTarget || lidVelocity !== 0
    const updateLid = (delta: number) => {
      if (!isLidMoving()) return
      if (reducedMotionQuery.matches) {
        hinge.rotation.x = lidTarget
        lidVelocity = 0
      } else {
        const speed = 8 / DURATION.long
        const offset = hinge.rotation.x - lidTarget
        const decay = Math.exp(-speed * delta)
        const step = (lidVelocity + speed * offset) * delta
        hinge.rotation.x = lidTarget + (offset + step) * decay
        lidVelocity = (lidVelocity - speed * step) * decay
        if (
          Math.abs(hinge.rotation.x - lidTarget) < 0.0001 &&
          Math.abs(lidVelocity) < 0.0001
        ) {
          hinge.rotation.x = lidTarget
          lidVelocity = 0
        }
      }
      previousCenter.copy(center)
      updateBounds()
      camera.position.add(center).sub(previousCenter)
      controls.target.copy(center)
      fitCamera()
      invalidate()
    }

    const cancelReturn = () => {
      returnState = 'none'
    }
    const stopIdle = () => {
      if (idleWeight > 0) {
        camera.position.copy(idleCamera.position)
        camera.up.copy(idleCamera.up)
        camera.lookAt(center)
      }
      idleWeight = 0
      idleElapsed = 0
      idleCooldown = idleDelay
      invalidate()
    }
    const pauseRotation = () => {
      isViewChangedByUser = true
      cancelReturn()
      stopIdle()
      setIsPlaying(false)
    }
    const handlePointerDown = (e: PointerEvent) => {
      if (
        !isManualControlEnabled ||
        (e.pointerType !== 'touch' && e.button !== 0)
      )
        return
      pointers.set(e.pointerId, {
        x: e.clientX,
        y: e.clientY,
        startX: e.clientX,
        startY: e.clientY,
      })
      if (e.pointerType === 'touch') {
        touchGesture = pointers.size > 1 ? 'zoom' : 'pending'
        controls.noRotate = true
      }
      updateHotspotHover()
    }
    const handlePointerMove = (e: PointerEvent) => {
      if (!isManualControlEnabled) return
      hoverPointer =
        e.pointerType === 'touch' ? null : {x: e.clientX, y: e.clientY}
      updateHotspotHover()
      const previous = pointers.get(e.pointerId)
      if (!previous) return
      const isPointerMoving =
        e.clientX !== previous.x || e.clientY !== previous.y
      previous.x = e.clientX
      previous.y = e.clientY
      if (e.pointerType === 'touch') {
        if (touchGesture === 'pending') {
          const x = e.clientX - previous.startX
          const y = e.clientY - previous.startY
          if (Math.hypot(x, y) < touchDragDistance) return
          touchGesture = Math.abs(x) > Math.abs(y) ? 'rotate' : 'scroll'
          controls.noRotate = touchGesture !== 'rotate'
        }
        if (touchGesture === 'scroll') return
      }
      invalidate()
      if (
        pointers.size === 1 &&
        (e.pointerType !== 'touch' || touchGesture === 'rotate') &&
        (!isViewChangedByUser || isPlaying || returnState !== 'none') &&
        isPointerMoving
      ) {
        pauseRotation()
      }
    }
    const handlePointerEnd = (e: PointerEvent) => {
      if (!pointers.delete(e.pointerId)) return
      if (
        e.pointerType === 'touch' &&
        (e.type === 'pointercancel' ||
          (pointers.size === 0 && touchGesture !== 'rotate'))
      ) {
        replaceControls()
        invalidate()
      }
      updateHotspotHover()
    }
    const wakeControls = () => {
      controlsUntil = performance.now() + DURATION.long
      invalidate()
    }
    const bindControls = () => {
      controls.addEventListener('change', invalidate)
      controls.addEventListener('start', wakeControls)
      controls.addEventListener('end', wakeControls)
    }
    const replaceControls = () => {
      pointers.clear()
      touchGesture = null
      const {minDistance, maxDistance} = controls
      controls.dispose()
      controls = createControls(
        camera,
        interaction,
        center,
        isManualControlEnabled
      )
      controls.minDistance = minDistance
      controls.maxDistance = maxDistance
      controls.staticMoving = reducedMotionQuery.matches
      bindControls()
      camera.lookAt(center)
    }

    const handleScroll = () => {
      if (!isManualControlEnabled) return
      controls.handleResize()
      updateHotspotHover()
    }

    const handleMotion = () => {
      controls.staticMoving = reducedMotionQuery.matches
      if (reducedMotionQuery.matches) {
        slidesPauseAt = null
        setIsPlaying(false)
        stopIdle()
      }
      invalidate()
    }

    const getFitDistance = () => {
      const tangent = Math.tan((camera.fov * Math.PI) / 360)
      const closedProgress = Math.max(
        0,
        Math.min(hinge.rotation.x / closedAngle, 1)
      )
      const framingMargin = 1.02 + closedProgress * 0.1
      return (
        Math.max(
          ...corners.map(corner => {
            const depth = corner.dot(initialDirection)
            return (
              Math.max(
                Math.abs(corner.dot(initialRight)) / (tangent * camera.aspect),
                Math.abs(corner.dot(initialUp)) / tangent
              ) + depth
            )
          })
        ) * framingMargin
      )
    }
    const constrainZoom = () => {
      const offset = viewOffset.copy(camera.position).sub(center)
      const distance = offset.length()
      offset.normalize()
      const nextDistance = Math.max(
        controls.minDistance,
        Math.min(distance, controls.maxDistance)
      )
      if (Math.abs(distance - nextDistance) > distance * 0.000001) {
        camera.position.copy(center).addScaledVector(offset, nextDistance)
        camera.lookAt(center)
        invalidate()
      }
    }
    const updateIdle = (delta: number) => {
      idleCooldown = Math.max(0, idleCooldown - delta)
      const isIdleActive =
        returnState === 'none' &&
        !reducedMotionQuery.matches &&
        idleCooldown === 0
      const previousWeight = idleWeight
      idleWeight +=
        ((isIdleActive ? 1 : 0) - idleWeight) *
        (1 - Math.exp(-delta / DURATION.short))
      if (!isIdleActive && idleWeight < 0.001) idleWeight = 0

      if (idleWeight > 0) {
        idleElapsed += delta
        const phase =
          ((idleElapsed % DURATION.alternate) / DURATION.alternate) *
          -Math.PI *
          2
        const radians = (Math.PI / 180) * idleWeight
        const sway = Math.sin(phase)
        const yaw = (sway * 21 + (Math.cos(phase) - 1) * 5) * radians
        const pitch = (Math.sin(phase * 2) * 4 + sway * 2) * radians
        const offset = viewOffset.copy(camera.position).sub(center)
        offset.applyAxisAngle(camera.up, yaw)
        const right = viewRight.crossVectors(camera.up, offset).normalize()
        offset.applyAxisAngle(right, pitch)
        idleCamera.up.copy(camera.up).applyAxisAngle(right, pitch)
        idleCamera.position.copy(center).add(offset)
        idleCamera.lookAt(center)
        if (delta > 0) invalidate()
      } else {
        idleElapsed = 0
        if (previousWeight > 0) invalidate()
      }
    }
    const resetFrameTiming = () => {
      sampleTime = 0
      sampleFrames = 0
      stableTime = 0
    }
    const updateResolution = () => {
      if (!surfaceWidth || !surfaceHeight) return
      const pixelRatio =
        Math.min(
          window.devicePixelRatio || 1,
          Math.sqrt(maxRenderPixels / (surfaceWidth * surfaceHeight)),
          renderer.capabilities.maxTextureSize / surfaceWidth,
          renderer.capabilities.maxTextureSize / surfaceHeight
        ) * renderScale
      const width = Math.max(1, Math.floor(surfaceWidth * pixelRatio))
      const height = Math.max(1, Math.floor(surfaceHeight * pixelRatio))
      if (canvas.width === width && canvas.height === height) return
      renderer.setDrawingBufferSize(surfaceWidth, surfaceHeight, pixelRatio)
      invalidate()
    }
    const updateRenderQuality = (delta: number) => {
      if (!delta) {
        resetFrameTiming()
        return
      }
      if (!isPlaying || reducedMotionQuery.matches) return
      sampleTime += delta
      sampleFrames++
      if (sampleTime < DURATION.longest) return
      const average = sampleTime / sampleFrames
      if (average > targetFrameTime * 1.5) {
        renderScale = Math.max(minRenderScale, renderScale * 0.8)
        stableTime = 0
      } else if (average < targetFrameTime * 1.1) {
        stableTime += sampleTime
        if (stableTime >= DURATION.longest * 4) {
          renderScale = Math.min(1, renderScale / 0.8)
          stableTime = 0
        }
      } else {
        stableTime = 0
      }
      sampleTime = 0
      sampleFrames = 0
      updateResolution()
    }
    const resizeSurface = () => {
      if (!stageWidth || !stageHeight) return
      const projectedRadius =
        (radius * stageHeight) /
        (2 *
          Math.tan((camera.fov * Math.PI) / 360) *
          Math.sqrt(controls.minDistance ** 2 - radius ** 2))
      const paddingX = Math.max(
        0,
        Math.ceil(projectedRadius - stageWidth / 2) + 2
      )
      const paddingY = Math.max(
        0,
        Math.ceil(projectedRadius - stageHeight / 2) + 2
      )
      surfaceWidth = stageWidth + paddingX * 2
      surfaceHeight = stageHeight + paddingY * 2
      canvas.style.left = `${-paddingX}px`
      canvas.style.top = `${-paddingY}px`
      canvas.style.width = `${surfaceWidth}px`
      canvas.style.height = `${surfaceHeight}px`
      updateResolution()
      camera.setViewOffset(
        stageWidth,
        stageHeight,
        -paddingX,
        -paddingY,
        surfaceWidth,
        surfaceHeight
      )
      idleCamera.projectionMatrix.copy(camera.projectionMatrix)
      idleCamera.projectionMatrixInverse.copy(camera.projectionMatrixInverse)
    }
    const fitCamera = (isResettingZoom = false) => {
      const zoomRatio =
        !isResettingZoom && initialDistance
          ? camera.position.distanceTo(center) / initialDistance
          : 1
      initialDistance = getFitDistance()
      controls.minDistance = initialDistance
      controls.maxDistance = initialDistance * 2.5
      camera.position
        .sub(center)
        .setLength(initialDistance * zoomRatio)
        .add(center)
      camera.lookAt(center)
      constrainZoom()
      resizeSurface()
    }
    const resize = () => {
      const width = stage.clientWidth
      const height = stage.clientHeight
      if (!width || !height) return
      stageWidth = width
      stageHeight = height
      camera.aspect = width / height
      fitCamera()
      controls.handleResize()
      invalidate()
    }
    const watchPixelRatio = () => {
      const resolutionQuery = window.matchMedia(
        `(resolution: ${window.devicePixelRatio || 1}dppx)`
      )
      resolutionQuery.addEventListener('change', watchPixelRatio, {
        once: true,
        signal: events.signal,
      })
      resetFrameTiming()
      updateResolution()
    }
    const updateReturn = (delta: number) => {
      if (!isPlaying) return
      if (returnState === 'pending') {
        stopIdle()
        replaceControls()
        returnRotation.copy(camera.quaternion)
        returnDistance = camera.position.distanceTo(center)
        returnElapsed = 0
        returnState = 'active'
      }
      if (returnState !== 'active') return
      returnElapsed += delta
      const progress = reducedMotionQuery.matches
        ? 1
        : Math.min(returnElapsed / DURATION.longest, 1)
      const eased = smoothStep(progress)
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
        isViewChangedByUser = false
        returnState = 'none'
        idleCooldown = 0
        camera.up.set(0, 1, 0)
        camera.lookAt(center)
      }
    }

    const drawScreen = () => {
      if (screen.draw(images, elapsed, reducedMotionQuery.matches)) invalidate()
    }

    const loadRemainingImages = () => {
      Promise.all(
        BANNER_IMAGES.slice(firstImageIndex + 1).map(src =>
          loadImage(src, events.signal, true)
        )
      ).then(loaded => {
        if (isDisposed) return
        const remaining = loaded.filter(image => image !== null)
        if (!remaining.length) return
        images.push(...remaining)
        elapsed = 0
        slidesPauseAt = null
        invalidate()
      })
    }

    const render = (time: number) => {
      frame = 0
      if (isDisposed || !isStarted || !isVisible || document.hidden) return
      const isAutomaticFrame =
        isPlaying &&
        pointers.size === 0 &&
        time >= controlsUntil &&
        !isLidMoving()
      const sinceAutoFrame = time - lastAutoFrame
      if (
        isAutomaticFrame &&
        lastAutoFrame &&
        sinceAutoFrame < targetFrameTime - 0.5
      ) {
        requestFrame()
        return
      }
      lastAutoFrame = isAutomaticFrame
        ? lastAutoFrame
          ? time - (sinceAutoFrame % targetFrameTime)
          : time
        : 0
      const delta = previousTime ? time - previousTime : 0
      previousTime = time
      const frameDelta = Math.min(delta, maxFrameDelta)
      const animationDelta = frameDelta * animationSpeed
      if (isPlaying || slidesPauseAt !== null) {
        elapsed += animationDelta
        if (slidesPauseAt !== null && elapsed >= slidesPauseAt) {
          elapsed = slidesPauseAt
          slidesPauseAt = null
        }
      }
      if (isManualControlEnabled && returnState !== 'active') {
        controls.dynamicDampingFactor =
          1 -
          Math.pow(
            1 - controlsDamping,
            (frameDelta || targetFrameTime) / targetFrameTime
          )
        controls.update()
      }
      updateLid(frameDelta)
      updateReturn(animationDelta)
      updateIdle(isPlaying ? animationDelta : 0)
      if (
        (!isPlaying && slidesPauseAt === null) ||
        time - previousScreenTime >= DURATION.longer / 30
      ) {
        drawScreen()
        previousScreenTime = time
      }
      if (isDirty) {
        updateRenderQuality(delta)
        isDirty = false
        const viewCamera = idleWeight > 0 ? idleCamera : camera
        try {
          renderer.render(scene, viewCamera)
          updateHotspot(viewCamera)
        } catch {
          onError()
        }
      }
      if (isPlaying || slidesPauseAt !== null || isLidMoving()) requestFrame()
      if (!frame) previousTime = 0
    }
    const updateActivity = () => {
      cancelAnimationFrame(frame)
      frame = 0
      previousTime = 0
      lastAutoFrame = 0
      resetFrameTiming()
      requestFrame()
    }
    const reset = () => {
      cancelReturn()
      stopIdle()
      isViewChangedByUser = false
      idleCooldown = 0
      camera.up.set(0, 1, 0)
      camera.position.copy(center).add(initialDirection)
      replaceControls()
      fitCamera(true)
      invalidate()
    }

    const handleKey = (key: string) => {
      if (!isManualControlEnabled) return false
      if (key === ' ') {
        setIsPlaying(!isPlaying)
        return true
      }
      if (key === 'Home') {
        reset()
        return true
      }
      if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(key))
        return false
      pauseRotation()
      const offset = camera.position.clone().sub(controls.target)
      const isHorizontal = key === 'ArrowLeft' || key === 'ArrowRight'
      const axis = isHorizontal
        ? camera.up.clone()
        : new Vector3().crossVectors(camera.up, offset).normalize()
      const angle = (key === 'ArrowLeft' || key === 'ArrowUp' ? 1 : -1) * 0.15
      offset.applyAxisAngle(axis, angle)
      camera.up.applyAxisAngle(axis, angle)
      camera.position.copy(controls.target).add(offset)
      controls.update()
      invalidate()
      return true
    }

    bindControls()
    onPlayingChange(isPlaying)
    interaction.addEventListener(
      'pointerdown',
      handlePointerDown,
      pointerOptions
    )
    document.addEventListener('pointermove', handlePointerMove, pointerOptions)
    document.addEventListener('pointerup', handlePointerEnd, pointerOptions)
    document.addEventListener('pointercancel', handlePointerEnd, pointerOptions)
    document.addEventListener('pointerleave', clearHotspotHover, eventOptions)
    window.addEventListener('blur', clearHotspotHover, eventOptions)

    reducedMotionQuery.addEventListener('change', handleMotion, eventOptions)
    handleMotion()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(stage)
    cleanups.push(() => resizeObserver.disconnect())
    resize()
    watchPixelRatio()
    homeRotation.copy(camera.quaternion)

    let loadedImage = await firstImage
    while (!loadedImage && ++firstImageIndex < BANNER_IMAGES.length) {
      events.signal.throwIfAborted()
      loadedImage = await loadImage(
        BANNER_IMAGES[firstImageIndex],
        events.signal
      )
    }
    events.signal.throwIfAborted()
    if (!loadedImage) throw new Error('Laptop screen images are unavailable')
    images.push(loadedImage)

    drawScreen()
    await renderer.compileAsync(scene, camera)
    events.signal.throwIfAborted()
    renderer.render(scene, camera)
    updateHotspot(camera)
    events.signal.throwIfAborted()

    const visibilityObserver = new IntersectionObserver(entries => {
      isVisible = entries.some(entry => entry.isIntersecting)
      updateActivity()
    })
    visibilityObserver.observe(canvas)
    document.addEventListener('visibilitychange', updateActivity, eventOptions)
    window.addEventListener('scroll', handleScroll, {
      passive: true,
      capture: true,
      signal: events.signal,
    })
    cleanups.push(() => visibilityObserver.disconnect())
    return {
      setIsPlaying,
      handleKey,
      start: () => {
        if (isStarted || isDisposed) return
        isStarted = true
        loadRemainingImages()
        updateActivity()
      },
      setAnimationSpeed: (speed: number) => {
        animationSpeed = speed
      },
      setIsManualControlEnabled: (isEnabled: boolean) => {
        isManualControlEnabled = isEnabled
        if (!isEnabled) {
          hoverPointer = null
          lidHotspot.classList.remove(
            'Laptop-LidHotspot_visible',
            'Laptop-LidHotspot_hovered'
          )
        }
        replaceControls()
        invalidate()
      },
      setIsLidOpen: (isLidOpen: boolean) => {
        lidTarget = isLidOpen ? 0 : closedAngle
        invalidate()
      },
    }
  } catch (error) {
    dispose()
    throw error
  }
}
