import {
  CanvasTexture,
  CircleGeometry,
  CylinderGeometry,
  ExtrudeGeometry,
  Group,
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  Path,
  PlaneGeometry,
  RingGeometry,
  Shape,
  ShapeGeometry,
  SRGBColorSpace,
} from 'three'
import type {Material} from 'three'
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js'
import {SVGLoader} from 'three/addons/loaders/SVGLoader.js'
import {
  mergeGeometries,
  toCreasedNormals,
} from 'three/addons/utils/BufferGeometryUtils.js'

import appleSvg from '#assets/icons/apple.svg?raw'
import {COLOR} from '#styles/theme'

// Procedural approximation of the 16-inch MacBook Pro (2021), in Space Gray.
// Chassis proportions follow Apple's 35.57 × 24.81 cm dimensions.
export const createLaptopModel = (screenTexture: CanvasTexture) => {
  const laptop = new Group()
  const bodyWidth = 4.2
  const bodyDepth = (bodyWidth * 24.81) / 35.57
  const rearEdgeZ = -bodyDepth / 2
  const chassisBevel = 0.018
  const lowerRadius = 0.08
  const lowerCurveTop = -0.078 + lowerRadius
  const footOffsetZ = 1.15
  const coverJointHeight = -0.054
  // The open lid sits behind the rear wall, with its lower edge below the deck.
  const lidZ = rearEdgeZ - 0.065
  const hingeRecessWidth = 3.3
  const hingeRecessDepth = 0.055
  const keyboardWidth = 3.3
  const keyWidth = keyboardWidth - 0.12
  const aluminum = new MeshStandardMaterial({
    color: '#777b82',
    metalness: 0.85,
    roughness: 0.36,
  })
  const edge = new MeshStandardMaterial({
    color: '#60646b',
    metalness: 0.85,
    roughness: 0.3,
  })
  const dark = new MeshStandardMaterial({
    color: '#101216',
    roughness: 0.75,
    envMapIntensity: 0.25,
  })
  const rubber = new MeshStandardMaterial({
    color: '#060709',
    roughness: 0.9,
    envMapIntensity: 0.12,
  })

  const fingerRecessMaxDepth = 0.02
  const fingerRecessBottom = 0.05
  const deckHeight = 0.078
  const fingerRecessDepth = (x: number) => {
    const end = Math.max(0, Math.min(1, (Math.abs(x) - 0.25) / 0.07))
    return fingerRecessMaxDepth * Math.sqrt(1 - end * end)
  }

  const roundedOutline = (
    width: number,
    height: number,
    radius: number,
    hingeRecess = false
  ) => {
    const x = -width / 2
    const y = -height / 2
    const shape = new Shape()
    shape.moveTo(x + radius, y)
    if (hingeRecess) {
      // Sample the cut itself so the side wall can follow a concave profile.
      for (let step = 0; step <= 64; step++) {
        const recessX = -0.34 + (step / 64) * 0.68
        shape.lineTo(recessX, y + fingerRecessDepth(recessX))
      }
    }
    shape.lineTo(x + width - radius, y)
    shape.quadraticCurveTo(x + width, y, x + width, y + radius)
    shape.lineTo(x + width, y + height - radius)
    shape.quadraticCurveTo(
      x + width,
      y + height,
      x + width - radius,
      y + height
    )
    if (hingeRecess) {
      // The rear opening is cut into the chassis outline, so the hinge sits
      // below the palm-rest surface rather than on top of a solid deck.
      const halfRecess = hingeRecessWidth / 2
      const recessFront = y + height - hingeRecessDepth
      const recessRadius = 0.025
      shape.lineTo(halfRecess, y + height)
      shape.lineTo(halfRecess, recessFront + recessRadius)
      shape.quadraticCurveTo(
        halfRecess,
        recessFront,
        halfRecess - recessRadius,
        recessFront
      )
      shape.lineTo(-halfRecess + recessRadius, recessFront)
      shape.quadraticCurveTo(
        -halfRecess,
        recessFront,
        -halfRecess,
        recessFront + recessRadius
      )
      shape.lineTo(-halfRecess, y + height)
    }
    shape.lineTo(x + radius, y + height)
    shape.quadraticCurveTo(x, y + height, x, y + height - radius)
    shape.lineTo(x, y + radius)
    shape.quadraticCurveTo(x, y, x + radius, y)
    return shape
  }

  // Rounded slabs keep their broad corner radii even when the metal is thin.
  const slab = (
    width: number,
    height: number,
    depth: number,
    radius: number,
    material: Material,
    bevel = 0.008,
    smooth = false
  ): Mesh => {
    const geometry = new ExtrudeGeometry(
      roundedOutline(width, height, radius),
      {
        depth,
        bevelEnabled: bevel > 0,
        bevelSegments: smooth ? 6 : 2,
        steps: 1,
        bevelSize: bevel,
        bevelThickness: bevel,
        curveSegments: smooth ? 24 : 6,
      }
    )
    geometry.translate(0, 0, -depth / 2)
    if (smooth) {
      toCreasedNormals(geometry, Math.PI / 8)
      // Smooth the rounded rim while keeping the large front/back faces flat.
      const positions = geometry.getAttribute('position')
      const normals = geometry.getAttribute('normal')
      const faceDepth = depth / 2 + bevel
      for (let vertex = 0; vertex < positions.count; vertex += 3) {
        const z = positions.getZ(vertex)
        if (
          Math.abs(Math.abs(z) - faceDepth) < 0.000001 &&
          [vertex + 1, vertex + 2].every(
            index => Math.abs(positions.getZ(index) - z) < 0.000001
          )
        ) {
          for (let corner = 0; corner < 3; corner++) {
            normals.setXYZ(vertex + corner, 0, 0, Math.sign(z))
          }
        }
      }
    }
    return new Mesh(geometry, material)
  }

  // Cut the deck around the keyboard and trackpad so both can sit below or
  // flush with the palm rest, instead of covering it with raised plates.
  const chassisOutline = roundedOutline(bodyWidth, bodyDepth, 0.16, true)
  const keyboardOpening = roundedOutline(keyboardWidth + 0.02, 1.33, 0.075)
  const trackpadOpening = roundedOutline(1.96, 1.12, 0.075)
  const keyboardHole = new Path(
    keyboardOpening.getPoints(16).map(point => {
      point.y += 0.5
      return point
    })
  )
  const trackpadHole = new Path(
    trackpadOpening.getPoints(16).map(point => {
      point.y -= 0.78
      return point
    })
  )
  chassisOutline.holes.push(keyboardHole, trackpadHole)
  // Build the outer rim directly, with identical height rings all around.
  // The upper edge is square; only the bottom follows a quarter-circle.
  const rimOffset = (height: number) => {
    const drop = Math.max(0, Math.min(lowerRadius, lowerCurveTop - height))
    return chassisBevel - lowerRadius + Math.sqrt(lowerRadius ** 2 - drop ** 2)
  }
  const rimContour = (offset: number, cut: boolean, rearCut = 1) =>
    roundedOutline(
      bodyWidth + 2 * offset,
      bodyDepth + 2 * offset,
      0.16 + offset,
      true
    )
      .getPoints(48)
      .map(point => {
        if (!cut && Math.abs(point.x) < 0.37 && point.y < -bodyDepth / 2 + 0.08)
          point.y = -bodyDepth / 2 - offset
        if (
          Math.abs(point.x) <= hingeRecessWidth / 2 + 0.00001 &&
          point.y > bodyDepth / 2 + offset - hingeRecessDepth - 0.00001
        ) {
          const back = bodyDepth / 2 + offset
          point.y = back - (back - point.y) * rearCut
        }
        return point
      })
  const deckOutline = new Shape(rimContour(chassisBevel, true))
  deckOutline.holes.push(keyboardHole, trackpadHole)
  const deckGeometry = new ShapeGeometry(deckOutline)
  deckGeometry.translate(0, 0, deckHeight)
  const deckSurface = deckGeometry.toNonIndexed()

  // Retain the small bevels around the recessed keyboard and trackpad only.
  const chassisGeometry = new ExtrudeGeometry(chassisOutline, {
    depth: 0.12,
    bevelEnabled: true,
    bevelSegments: 6,
    steps: 1,
    bevelSize: chassisBevel,
    bevelThickness: chassisBevel,
    curveSegments: 16,
  })
  chassisGeometry.translate(0, 0, -0.06)
  const chassisPositions = chassisGeometry.getAttribute('position')
  const chassisNormals = chassisGeometry.getAttribute('normal')
  const chassisIndices: number[] = []
  for (let vertex = 0; vertex < chassisPositions.count; vertex += 3) {
    const holeWall =
      Math.abs(chassisNormals.getZ(vertex)) < 0.999 &&
      [vertex, vertex + 1, vertex + 2].every(index => {
        const x = chassisPositions.getX(index)
        const y = chassisPositions.getY(index)
        return (
          (Math.abs(x) < 1.68 && Math.abs(y - 0.5) < 0.69) ||
          (Math.abs(x) < 1 && Math.abs(y + 0.78) < 0.59)
        )
      })
    if (holeWall) {
      for (let corner = 0; corner < 3; corner++) {
        const index = vertex + corner
        chassisPositions.setZ(
          index,
          Math.max(-0.05, chassisPositions.getZ(index))
        )
      }
      chassisIndices.push(vertex, vertex + 1, vertex + 2)
    }
  }
  chassisGeometry.setIndex(chassisIndices)
  const chassisSurface = chassisGeometry.toNonIndexed()
  toCreasedNormals(chassisSurface, Math.PI / 8)

  // The rim needs aligned samples at every height, but the flat cap must
  // discard duplicate/collinear points to avoid hairline triangulation cracks.
  const bottomPoints = rimContour(chassisBevel - lowerRadius, false, 0)
    .slice(0, -1)
    .filter((point, index, points) => {
      const previous = points[(index + points.length - 1) % points.length]
      return point.distanceToSquared(previous) > 1e-12
    })
  const underside = new Shape(
    bottomPoints.filter((point, index, points) => {
      const previous = points[(index + points.length - 1) % points.length]
      const next = points[(index + 1) % points.length]
      return (
        Math.abs(
          (point.x - previous.x) * (next.y - point.y) -
            (point.y - previous.y) * (next.x - point.x)
        ) > 1e-9
      )
    })
  )
  const engravingOpening = new Path()
  engravingOpening.moveTo(-0.5, -0.08)
  engravingOpening.lineTo(-0.5, 0.08)
  engravingOpening.lineTo(0.5, 0.08)
  engravingOpening.lineTo(0.5, -0.08)
  engravingOpening.closePath()
  underside.holes.push(engravingOpening)
  const undersideGeometry = new ShapeGeometry(underside)
  undersideGeometry.rotateY(Math.PI)
  undersideGeometry.translate(0, 0, -deckHeight)
  const undersideSurface = undersideGeometry.toNonIndexed()

  const engravingCanvas = document.createElement('canvas')
  engravingCanvas.width = 1024
  engravingCanvas.height = 160
  const engravingContext = engravingCanvas.getContext('2d')!
  engravingContext.fillStyle = '#ffffff'
  engravingContext.fillRect(0, 0, 1024, 160)
  engravingContext.fillStyle = '#000000'
  engravingContext.filter = 'blur(1.5px)'
  engravingContext.font = '112px Arial, sans-serif'
  engravingContext.textAlign = 'center'
  engravingContext.textBaseline = 'middle'
  engravingContext.fillText('MacBook Pro', 512, 80)
  // Sculpt the lettering into a metal surface. Soft glyph edges form small
  // bevels whose highlights change with the viewing angle, without ink.
  const engravingPixels = engravingContext.getImageData(0, 0, 1024, 160).data
  const engravingGeometry = new PlaneGeometry(1, 0.16, 384, 64)
  const engravingPositions = engravingGeometry.getAttribute('position')
  const engravingUv = engravingGeometry.getAttribute('uv')
  for (let vertex = 0; vertex < engravingPositions.count; vertex++) {
    const x = Math.min(1023, Math.round(engravingUv.getX(vertex) * 1023))
    const y = Math.min(159, Math.round((1 - engravingUv.getY(vertex)) * 159))
    const depth = (1 - engravingPixels[(y * 1024 + x) * 4] / 255) * 0.005
    engravingPositions.setZ(vertex, -depth)
  }
  engravingGeometry.computeVertexNormals()
  engravingGeometry.rotateY(Math.PI)
  engravingGeometry.translate(0, 0, -0.078)
  const engravingSurface = engravingGeometry.toNonIndexed()
  const topContour = rimContour(chassisBevel, false)
  const bottomSegments = 32
  const ringHeights = [
    ...[deckHeight, fingerRecessBottom, 0.02, 0.01, 0, -0.0075, -0.015].filter(
      height => height > lowerCurveTop
    ),
    lowerCurveTop,
    ...Array.from(
      {length: bottomSegments},
      (_, step) =>
        lowerCurveTop -
        lowerRadius * Math.sin((((step + 1) / bottomSegments) * Math.PI) / 2)
    ),
  ]
  const rimGeometry = new PlaneGeometry(
    1,
    1,
    topContour.length - 1,
    ringHeights.length - 1
  )
  const rimPositions = rimGeometry.getAttribute('position')
  for (let row = 0; row < ringHeights.length; row++) {
    const height = ringHeights[row]
    const rearCut = Math.max(0, Math.min(1, (height + 0.015) / 0.035))
    const points = rimContour(rimOffset(height), false, rearCut)
    for (let column = 0; column < points.length; column++) {
      const point = points[column]
      const front = point.y < -bodyDepth / 2 && Math.abs(point.x) < 0.37
      const floor =
        deckHeight -
        ((deckHeight - fingerRecessBottom) * fingerRecessDepth(point.x)) /
          fingerRecessMaxDepth
      rimPositions.setXYZ(
        row * points.length + column,
        point.x,
        point.y,
        row === 0 && front ? floor : height
      )
    }
  }
  rimGeometry.computeVertexNormals()
  const rimNormals = rimGeometry.getAttribute('normal')
  // Analytic normals keep the long straight sides and the bottom tangent
  // smooth, including the shared start/end of the closed contour.
  for (let row = 0; row < ringHeights.length; row++) {
    const height = ringHeights[row]
    const rearCut = Math.max(0, Math.min(1, (height + 0.015) / 0.035))
    const points = rimContour(rimOffset(height), false, rearCut)
    const sine = Math.min(1, Math.max(0, lowerCurveTop - height) / lowerRadius)
    const cosine = Math.sqrt(1 - sine * sine)
    for (let column = 0; column < points.length; column++) {
      if (
        height >= -0.015 &&
        height <= 0.02 &&
        Math.abs(points[column].x) <= hingeRecessWidth / 2 + 0.025 &&
        points[column].y > bodyDepth / 2 - hingeRecessDepth - 0.001
      )
        continue
      const count = points.length - 1
      const previous = points[(column + count - 1) % count]
      const next = points[(column + 1) % count]
      const dx = next.x - previous.x
      const dy = next.y - previous.y
      const length = Math.hypot(dx, dy) || 1
      rimNormals.setXYZ(
        row * points.length + column,
        (dy / length) * cosine,
        (-dx / length) * cosine,
        -sine
      )
    }
  }
  const rimSurface = rimGeometry.toNonIndexed()

  // The finger scoop meets the square upper edge without an extra bevel.
  const cutColumns = Array.from(
    {length: 65},
    (_, step) => -0.34 + (step / 64) * 0.68
  )
  const fingerCutGeometry = new PlaneGeometry(1, 1, cutColumns.length - 1, 16)
  const cutPositions = fingerCutGeometry.getAttribute('position')
  for (let row = 0; row <= 16; row++) {
    const t = 1 - row / 16
    for (let column = 0; column < cutColumns.length; column++) {
      const x = cutColumns[column]
      const depth = fingerRecessDepth(x)
      const floor =
        deckHeight -
        ((deckHeight - fingerRecessBottom) * depth) / fingerRecessMaxDepth
      cutPositions.setXYZ(
        row * cutColumns.length + column,
        x,
        -bodyDepth / 2 - chassisBevel + depth * t,
        floor + (deckHeight - floor) * t
      )
    }
  }
  fingerCutGeometry.computeVertexNormals()
  const fingerCutSurface = fingerCutGeometry.toNonIndexed()
  const baseGeometry = mergeGeometries([
    deckSurface,
    chassisSurface,
    undersideSurface,
    engravingSurface,
    rimSurface,
    fingerCutSurface,
  ])
  const cutVertices = fingerCutSurface.getAttribute('position').count
  const bodyVertices = baseGeometry.getAttribute('position').count - cutVertices
  baseGeometry.addGroup(0, bodyVertices, 0)
  baseGeometry.addGroup(bodyVertices, cutVertices, 1)
  // The machined cut scatters reflections more than the exterior metal.
  const recessMetal = aluminum.clone()
  recessMetal.roughness = 0.62
  recessMetal.envMapIntensity = 0.45
  const base = new Mesh(baseGeometry, [aluminum, recessMetal])
  base.rotation.x = -Math.PI / 2
  laptop.add(base)
  for (const geometry of [
    deckGeometry,
    deckSurface,
    chassisGeometry,
    chassisSurface,
    undersideGeometry,
    undersideSurface,
    engravingGeometry,
    engravingSurface,
    rimGeometry,
    rimSurface,
    fingerCutGeometry,
    fingerCutSurface,
  ])
    geometry.dispose()

  // The cover joint follows the lower rim through the centre of the vents.
  const seamWidth = 0.0015
  const seamGeometry = new PlaneGeometry(1, 1, topContour.length - 1, 1)
  const seamPositions = seamGeometry.getAttribute('position')
  for (let row = 0; row <= 1; row++) {
    const height = coverJointHeight + (0.5 - row) * seamWidth
    const points = rimContour(rimOffset(height) + 0.00025, false, 0)
    for (let column = 0; column < points.length; column++) {
      const point = points[column]
      seamPositions.setXYZ(
        row * points.length + column,
        point.x,
        point.y,
        height
      )
    }
  }
  seamGeometry.computeVertexNormals()
  const seam = new Mesh(
    seamGeometry,
    new MeshStandardMaterial({
      color: '#34383e',
      roughness: 0.8,
      envMapIntensity: 0.2,
    })
  )
  seam.rotation.x = -Math.PI / 2
  laptop.add(seam)

  const keyboard = slab(keyboardWidth, 1.31, 0.008, 0.07, rubber, 0.003)
  keyboard.rotation.x = -Math.PI / 2
  keyboard.position.set(0, 0.034, -0.5)
  laptop.add(keyboard)

  const keyCanvas = document.createElement('canvas')
  keyCanvas.width = 1536
  keyCanvas.height = 576
  const context = keyCanvas.getContext('2d')!
  context.fillStyle = COLOR.white
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.font = '22px sans-serif'
  const rows = [
    ['esc', '☀', '☀', '▣', '⌕', '◉', '☾', '◀', '▶', '▶', '◁', '−', '+', ''],
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '−', '=', '⌫'],
    ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
    ['caps', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'return'],
    ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'shift'],
    ['fn', 'ctrl', 'opt', 'cmd', '', 'cmd', 'opt', '◀', '▲', '▼', '▶'],
  ]
  const keyCount = rows.reduce((sum, row) => sum + row.length, 0)
  const keys = new InstancedMesh(
    new RoundedBoxGeometry(1, 1, 1, 2, 0.12),
    dark,
    keyCount
  )
  const transform = new Object3D()
  let index = 0
  let touchIdX = 0
  rows.forEach((row, rowIndex) => {
    const weights = row.map(label => {
      if (rowIndex === 0) return label === 'esc' ? 1.5 : 1
      if (label === '▲' || label === '▼') return 0.5
      return label === '' ? 5 : label.length > 1 ? 1.4 : 1
    })
    const total = weights.reduce((sum, value) => sum + value, 0)
    let left = 0
    row.forEach((label, column) => {
      const width = weights[column] / total
      const stackedArrow = label === '▲' || label === '▼'
      const arrow = rowIndex === 5 && ['◀', '▲', '▼', '▶'].includes(label)
      const center =
        left + (label === '▲' ? width : label === '▼' ? 0 : width / 2)
      const rowOffset = arrow ? (label === '▲' ? -0.25 : 0.25) : 0
      transform.position.set(
        (center - 0.5) * keyWidth,
        0.061,
        -0.5 + (rowIndex - 2.5 + rowOffset) * 0.205
      )
      transform.scale.set(
        width * (stackedArrow ? 2 : 1) * keyWidth - 0.025,
        0.025,
        arrow ? 0.078 : 0.175
      )
      if (rowIndex === 0 && column === row.length - 1) {
        touchIdX = transform.position.x
      }
      transform.updateMatrix()
      keys.setMatrixAt(index++, transform.matrix)
      context.fillText(
        label,
        center * keyCanvas.width,
        ((rowIndex + 0.5 + rowOffset) * keyCanvas.height) / 6
      )
      left += width
    })
  })
  laptop.add(keys)
  const keyTexture = new CanvasTexture(keyCanvas)
  keyTexture.colorSpace = SRGBColorSpace
  const labels = new Mesh(
    new PlaneGeometry(keyWidth, 1.23),
    new MeshBasicMaterial({
      map: keyTexture,
      transparent: true,
      depthWrite: false,
      toneMapped: false,
    })
  )
  labels.rotation.x = -Math.PI / 2
  labels.position.set(0, 0.0745, -0.5)
  laptop.add(labels)

  const touchIdRing = new Mesh(new RingGeometry(0.061, 0.069, 32), edge)
  const touchId = new Mesh(new CircleGeometry(0.061, 32), rubber)
  for (const part of [touchIdRing, touchId]) {
    part.rotation.x = -Math.PI / 2
    part.position.set(touchIdX, 0.075, -0.5 - 2.5 * 0.205)
    laptop.add(part)
  }

  const trackpadBorder = slab(1.96, 1.12, 0.002, 0.075, edge, 0.001)
  trackpadBorder.rotation.x = -Math.PI / 2
  trackpadBorder.position.set(0, 0.052, 0.78)
  laptop.add(trackpadBorder)
  const trackpad = slab(1.94, 1.1, 0.02, 0.065, aluminum, 0.001)
  trackpad.rotation.x = -Math.PI / 2
  trackpad.position.set(0, 0.0665, 0.78)
  laptop.add(trackpad)

  // Individual circular perforations avoid the striped texture sampling seen
  // at oblique angles. Both grilles still share a single instanced draw call.
  const speakerColumns = 32
  const speakerRows = 96
  const speakers = new InstancedMesh(
    new CircleGeometry(0.0027, 10),
    new MeshBasicMaterial({color: '#17191d', toneMapped: false}),
    2 * speakerColumns * speakerRows
  )
  let perforation = 0
  transform.rotation.set(-Math.PI / 2, 0, 0)
  transform.scale.set(1, 1, 1)
  const footGeometry = new CylinderGeometry(0.12, 0.114, 0.022, 48)
  const footRimGeometry = new RingGeometry(0.114, 0.126, 48)
  for (const side of [-1, 1]) {
    for (let row = 0; row < speakerRows; row++) {
      for (let column = 0; column < speakerColumns; column++) {
        transform.position.set(
          side * (1.675 + ((column + 0.5) * 0.4) / speakerColumns),
          0.081,
          -1.115 + ((row + 0.5) * 1.23) / speakerRows
        )
        transform.updateMatrix()
        speakers.setMatrixAt(perforation++, transform.matrix)
      }
    }
    for (const z of [-footOffsetZ, footOffsetZ]) {
      const foot = new Mesh(footGeometry, rubber)
      foot.position.set(side * 1.81, -0.088, z)
      laptop.add(foot)
      const rim = new Mesh(footRimGeometry, edge)
      rim.rotation.x = Math.PI / 2
      rim.position.set(side * 1.81, -0.08, z)
      laptop.add(rim)
    }
  }
  laptop.add(speakers)

  // Eight small, flush screw heads follow the underside reference photo.
  const screwHeadGeometry = new CircleGeometry(0.019, 24)
  const screwRimGeometry = new RingGeometry(0.017, 0.021, 24)
  const screwSocketShape = new Shape()
  for (let point = 0; point <= 60; point++) {
    const angle = (point / 60) * Math.PI * 2
    const radius = 0.007 + 0.002 * Math.cos(angle * 5)
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    if (point === 0) screwSocketShape.moveTo(x, y)
    else screwSocketShape.lineTo(x, y)
  }
  screwSocketShape.closePath()
  const screwSocketGeometry = new ShapeGeometry(screwSocketShape)
  for (const z of [-bodyDepth / 2 + 0.115, bodyDepth / 2 - 0.115]) {
    for (const x of [-2, -0.68, 0.68, 2]) {
      const screw = new Group()
      screw.rotation.x = Math.PI / 2
      screw.position.set(x, -0.08, z)
      screw.add(new Mesh(screwHeadGeometry, edge))
      screw.add(new Mesh(screwRimGeometry, aluminum))
      const socket = new Mesh(screwSocketGeometry, rubber)
      socket.position.z = 0.001
      screw.add(socket)
      laptop.add(screw)
    }
  }

  // Anchor ports to the outside of the bevel, not the un-bevelled outline.
  const portSurfaceX = bodyWidth / 2 + chassisBevel + 0.0005
  const portHeight = 0.012
  const addPort = (
    side: number,
    fromRear: number,
    width: number,
    height: number
  ) => {
    const port = slab(width, height, 0.003, height / 2, rubber, 0.001)
    port.rotation.y = (side * Math.PI) / 2
    port.position.set(
      side * portSurfaceX,
      portHeight,
      rearEdgeZ + bodyDepth * fromRear
    )
    laptop.add(port)
    return port
  }
  // Positions and widths follow the supplied top/side dimension drawing.
  // Left, from the hinge: MagSafe 3, two Thunderbolt ports, headphone jack.
  const magSafe = addPort(-1, 0.145, 0.21, 0.039)
  const contacts = new Mesh(
    new PlaneGeometry(0.15, 0.012),
    new MeshStandardMaterial({color: '#9d9172', metalness: 0.8, roughness: 0.4})
  )
  contacts.position.z = 0.003
  magSafe.add(contacts)
  addPort(-1, 0.22, 0.108, 0.037)
  addPort(-1, 0.28, 0.108, 0.037)
  const headphone = new Mesh(new CircleGeometry(0.019, 32), rubber)
  headphone.rotation.y = -Math.PI / 2
  headphone.position.set(
    -portSurfaceX,
    portHeight,
    rearEdgeZ + bodyDepth * 0.33
  )
  laptop.add(headphone)

  // Right: HDMI, one Thunderbolt port, and the SDXC slot.
  const hdmi = addPort(1, 0.145, 0.185, 0.05)
  const hdmiTongue = new Mesh(new PlaneGeometry(0.13, 0.012), edge)
  hdmiTongue.position.z = 0.003
  hdmi.add(hdmiTongue)
  addPort(1, 0.22, 0.108, 0.037)
  addPort(1, 0.32, 0.32, 0.026)

  // Stop ahead of the frontmost port (SDXC), retaining the front foot endpoint.
  const ventRearZ = rearEdgeZ + bodyDepth * 0.32 + 0.16 + 0.045
  const ventLength = footOffsetZ - ventRearZ
  const ventCenterZ = (footOffsetZ + ventRearZ) / 2
  const ventRadius = 0.006
  const ventHalfStraight = ventLength / 2 - ventRadius
  const ventShape = new Shape()
  ventShape.moveTo(-ventHalfStraight, -ventRadius)
  ventShape.lineTo(ventHalfStraight, -ventRadius)
  ventShape.absarc(ventHalfStraight, 0, ventRadius, -Math.PI / 2, Math.PI / 2)
  ventShape.lineTo(-ventHalfStraight, ventRadius)
  ventShape.absarc(
    -ventHalfStraight,
    0,
    ventRadius,
    Math.PI / 2,
    (3 * Math.PI) / 2
  )
  ventShape.closePath()
  for (const side of [-1, 1]) {
    const ventGeometry = new ShapeGeometry(ventShape, 32)
    const positions = ventGeometry.getAttribute('position')
    for (let vertex = 0; vertex < positions.count; vertex++) {
      const along = positions.getX(vertex)
      const height = coverJointHeight + positions.getY(vertex)
      positions.setXYZ(
        vertex,
        side * (bodyWidth / 2 + rimOffset(height) + 0.0007),
        height,
        ventCenterZ - side * along
      )
    }
    ventGeometry.computeVertexNormals()
    laptop.add(new Mesh(ventGeometry, rubber))
  }

  // Embed the connector in both the lid shell and the rear wall. Its depth
  // follows their positions so the open lid cannot separate from the base.
  const hingeRearZ = lidZ + 0.004
  const hingeFrontZ = rearEdgeZ + hingeRecessDepth + 0.01
  const hingeDepth = hingeFrontZ - hingeRearZ
  const hingeCenterZ = (hingeRearZ + hingeFrontZ) / 2
  const hingeCover = new Mesh(
    new RoundedBoxGeometry(
      hingeRecessWidth - 0.03,
      0.048,
      hingeDepth,
      6,
      0.006
    ),
    aluminum
  )
  hingeCover.position.set(0, -0.003, hingeCenterZ)
  laptop.add(hingeCover)
  const hingePlastic = new Mesh(
    new ShapeGeometry(
      roundedOutline(hingeRecessWidth - 0.045, hingeDepth - 0.012, 0.006),
      24
    ),
    rubber
  )
  hingePlastic.rotation.x = -Math.PI / 2
  hingePlastic.position.set(0, 0.0213, hingeCenterZ)
  laptop.add(hingePlastic)

  // Rear ventilation follows the curved wall below the hinge. The antenna
  // module divides it into three openings, with fine ribs inside each grille.
  const rearVentHeight = 0.026
  const rearVentY = -0.043
  const rearVentSections = [
    {x: -1.02, width: 0.98},
    {x: 0, width: 0.94},
    {x: 1.02, width: 0.98},
  ]
  const grilleGeometries: PlaneGeometry[] = []
  for (const section of rearVentSections) {
    const opening = new PlaneGeometry(section.width, rearVentHeight, 1, 24)
    const positions = opening.getAttribute('position')
    for (let vertex = 0; vertex < positions.count; vertex++) {
      const localY = positions.getY(vertex)
      const height = rearVentY + localY
      const cornerRadius = 0.005
      const cornerY = Math.max(
        0,
        Math.abs(localY) - rearVentHeight / 2 + cornerRadius
      )
      const halfWidth =
        section.width / 2 -
        cornerRadius +
        Math.sqrt(Math.max(0, cornerRadius * cornerRadius - cornerY * cornerY))
      positions.setXYZ(
        vertex,
        section.x - Math.sign(positions.getX(vertex)) * halfWidth,
        height,
        rearEdgeZ - rimOffset(height) - 0.0007
      )
    }
    opening.computeVertexNormals()
    laptop.add(new Mesh(opening, rubber))

    const ribCount = Math.floor((section.width - 0.02) / 0.022)
    for (let rib = 0; rib < ribCount; rib++) {
      const geometry = new PlaneGeometry(0.003, rearVentHeight - 0.004, 1, 4)
      const positions = geometry.getAttribute('position')
      const x = section.x + (rib - (ribCount - 1) / 2) * 0.022
      for (let vertex = 0; vertex < positions.count; vertex++) {
        const height = rearVentY + positions.getY(vertex)
        positions.setXYZ(
          vertex,
          x - positions.getX(vertex),
          height,
          rearEdgeZ - rimOffset(height) - 0.001
        )
      }
      geometry.computeVertexNormals()
      grilleGeometries.push(geometry)
    }
  }
  const rearGrille = new Mesh(
    mergeGeometries(grilleGeometries),
    new MeshStandardMaterial({
      color: '#292d32',
      metalness: 0.35,
      roughness: 0.72,
      envMapIntensity: 0.2,
    })
  )
  laptop.add(rearGrille)
  for (const geometry of grilleGeometries) geometry.dispose()

  const lid = new Group()
  lid.position.set(0, -0.02, lidZ)
  lid.rotation.x = -0.2
  laptop.add(lid)
  const shell = slab(bodyWidth, bodyDepth, 0.05, 0.15, aluminum, 0.008, true)
  shell.position.y = bodyDepth / 2
  lid.add(shell)
  // Reuse the site's vector mark. Keep it on the outer face of the lid and
  // flip SVG's downward Y axis so the logo reads upright when viewed behind.
  const applePaths = new SVGLoader().parse(
    appleSvg.replace('currentColor', '#000000')
  ).paths
  const appleGeometry = new ShapeGeometry(
    applePaths.flatMap(path => path.toShapes()),
    24
  )
  appleGeometry.translate(-12, -12, 0)
  const appleMaterial = new MeshStandardMaterial({
    color: '#b8bcc2',
    metalness: 1,
    roughness: 0.09,
    envMapIntensity: 0.5,
  })
  const apple = new Mesh(appleGeometry, appleMaterial)
  apple.scale.set(0.025, -0.025, 0.025)
  apple.rotation.y = Math.PI
  apple.position.set(0, bodyDepth / 2, -0.034)
  lid.add(apple)
  const bezel = slab(
    4.13,
    bodyDepth - 0.07,
    0.008,
    0.12,
    new MeshBasicMaterial({color: '#08090c', toneMapped: false}),
    0.003,
    true
  )
  bezel.position.set(0, bodyDepth / 2, 0.032)
  lid.add(bezel)

  const screenWidth = 4.01
  const screenHeight = (screenWidth * 2234) / 3456
  const halfWidth = screenWidth / 2
  const halfHeight = screenHeight / 2
  // Only the top display corners are rounded. Radii are estimated from Apple's
  // front-view product photo; the notch is part of the same glass contour.
  const cornerRadius = 0.065
  const notchHalfWidth = 0.215
  const notchDepth = 0.08
  const notchShoulderRadius = 0.012
  const notchBottomRadius = 0.025
  const notchBottom = halfHeight - notchDepth
  const screenShape = new Shape()
  screenShape.moveTo(-halfWidth, -halfHeight)
  screenShape.lineTo(halfWidth, -halfHeight)
  screenShape.lineTo(halfWidth, halfHeight - cornerRadius)
  screenShape.quadraticCurveTo(
    halfWidth,
    halfHeight,
    halfWidth - cornerRadius,
    halfHeight
  )
  screenShape.lineTo(notchHalfWidth + notchShoulderRadius, halfHeight)
  screenShape.quadraticCurveTo(
    notchHalfWidth,
    halfHeight,
    notchHalfWidth,
    halfHeight - notchShoulderRadius
  )
  screenShape.lineTo(notchHalfWidth, notchBottom + notchBottomRadius)
  screenShape.quadraticCurveTo(
    notchHalfWidth,
    notchBottom,
    notchHalfWidth - notchBottomRadius,
    notchBottom
  )
  screenShape.lineTo(-notchHalfWidth + notchBottomRadius, notchBottom)
  screenShape.quadraticCurveTo(
    -notchHalfWidth,
    notchBottom,
    -notchHalfWidth,
    notchBottom + notchBottomRadius
  )
  screenShape.lineTo(-notchHalfWidth, halfHeight - notchShoulderRadius)
  screenShape.quadraticCurveTo(
    -notchHalfWidth,
    halfHeight,
    -notchHalfWidth - notchShoulderRadius,
    halfHeight
  )
  screenShape.lineTo(-halfWidth + cornerRadius, halfHeight)
  screenShape.quadraticCurveTo(
    -halfWidth,
    halfHeight,
    -halfWidth,
    halfHeight - cornerRadius
  )
  screenShape.closePath()
  const screenGeometry = new ShapeGeometry(screenShape, 16)
  // ShapeGeometry uses world coordinates for UVs. Keep the logo texture mapped
  // to the full rectangular display, without stretching around the notch.
  const positions = screenGeometry.getAttribute('position')
  const uv = screenGeometry.getAttribute('uv')
  for (let vertex = 0; vertex < positions.count; vertex++) {
    uv.setXY(
      vertex,
      (positions.getX(vertex) + halfWidth) / screenWidth,
      (positions.getY(vertex) + halfHeight) / screenHeight
    )
  }
  const screen = new Mesh(
    screenGeometry,
    new MeshBasicMaterial({
      map: screenTexture,
      toneMapped: false,
    })
  )
  const screenTop = bodyDepth - 0.105
  screen.position.set(0, screenTop - halfHeight, 0.041)
  lid.add(screen)
  const camera = new Mesh(
    new CircleGeometry(0.013, 24),
    new MeshStandardMaterial({
      color: '#172630',
      metalness: 0.5,
      roughness: 0.18,
    })
  )
  camera.position.set(0, screenTop - notchDepth / 2, 0.04)
  lid.add(camera)

  // Centre the entire open laptop so it stays in frame when turned upside down.
  laptop.position.y = -1.1
  return {laptop, textures: [keyTexture], appleMaterial}
}
