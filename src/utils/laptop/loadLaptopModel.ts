import {
  InstancedMesh,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  type BufferGeometry,
  type Object3D,
  type Texture,
} from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js'
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js'

import modelUrl from '#assets/models/macbook.glb?url'

type TLaptopMaterial = MeshBasicMaterial | MeshStandardMaterial

const preservedMeshNames = new Set([
  'Chassis',
  'AppleLogo',
  'Display',
  'Camera',
])

const batchStaticMeshes = (
  laptop: Object3D,
  geometries: Set<BufferGeometry>
) => {
  const parents: Object3D[] = []
  laptop.traverse(object => {
    if (object.children.length > 1) parents.push(object)
  })
  for (const parent of parents) {
    const groups = new Map<TLaptopMaterial, Mesh[]>()
    for (const object of parent.children) {
      if (
        !(object instanceof Mesh) ||
        object instanceof InstancedMesh ||
        object.children.length ||
        preservedMeshNames.has(object.name)
      )
        continue

      const material = object.material as TLaptopMaterial
      if (material.transparent) continue
      const group = groups.get(material) ?? []
      group.push(object)
      groups.set(material, group)
    }
    for (const [material, meshes] of groups) {
      if (meshes.length < 2) continue
      const transformed: BufferGeometry[] = []
      try {
        for (const mesh of meshes) {
          mesh.updateMatrix()
          const geometry = mesh.geometry.clone()
          transformed.push(geometry)
          geometry.applyMatrix4(mesh.matrix)
        }
        const geometry = mergeGeometries(transformed)
        if (!geometry) continue
        geometries.add(geometry)
        geometry.computeBoundingBox()
        geometry.computeBoundingSphere()
        const batch = new Mesh(geometry, material)
        batch.name = 'LaptopStaticBatch'
        parent.remove(...meshes)
        parent.add(batch)
      } finally {
        transformed.forEach(geometry => geometry.dispose())
      }
    }
  }
}

export const loadLaptopModel = async (signal: AbortSignal) => {
  const response = await fetch(modelUrl, {signal})
  if (!response.ok) throw new Error(`MacBook model: HTTP ${response.status}`)
  const buffer = await response.arrayBuffer()
  signal.throwIfAborted()
  const {scene: laptop} = await new GLTFLoader()
    .setMeshoptDecoder(MeshoptDecoder)
    .parseAsync(buffer, '')
  const geometries = new Set<BufferGeometry>()
  const materials = new Set<TLaptopMaterial>()
  const textures = new Set<Texture>()
  const instancedMeshes: InstancedMesh[] = []
  const dispose = () => {
    instancedMeshes.forEach(mesh => mesh.dispose())
    geometries.forEach(geometry => geometry.dispose())
    materials.forEach(material => material.dispose())
    textures.forEach(texture => {
      texture.dispose()
      if (
        typeof ImageBitmap !== 'undefined' &&
        texture.image instanceof ImageBitmap
      )
        texture.image.close()
    })
  }
  try {
    laptop.traverse(object => {
      if (!(object instanceof Mesh)) return
      if (object instanceof InstancedMesh) instancedMeshes.push(object)
      geometries.add(object.geometry)
      const material = object.material as TLaptopMaterial
      if (materials.has(material)) return
      materials.add(material)
      Object.assign(material, material.userData.laptop)
      if (material.map) textures.add(material.map)
    })
    signal.throwIfAborted()

    const chassis = laptop.getObjectByName('Chassis')
    const screen = laptop.getObjectByName('Display')
    const apple = laptop.getObjectByName('AppleLogo')
    const lid = laptop.getObjectByName('Lid')
    const hinge = laptop.getObjectByName('LidHinge')
    const lidCamera = laptop.getObjectByName('Camera')
    if (
      !chassis ||
      !lid ||
      !hinge ||
      !lidCamera ||
      !(screen instanceof Mesh) ||
      !(screen.material instanceof MeshBasicMaterial) ||
      !(apple instanceof Mesh) ||
      !(apple.material instanceof MeshStandardMaterial)
    )
      throw new Error(
        'MacBook model is missing its chassis, hinge, lid, camera, display or logo'
      )

    batchStaticMeshes(laptop, geometries)
    const activeGeometries = new Set<BufferGeometry>()
    laptop.traverse(object => {
      if (object instanceof Mesh) activeGeometries.add(object.geometry)
    })
    for (const geometry of geometries) {
      if (activeGeometries.has(geometry)) continue
      geometry.dispose()
      geometries.delete(geometry)
    }

    return {
      laptop,
      chassis,
      lid,
      hinge,
      lidCamera,
      dispose,
      screenMaterial: screen.material,
      appleMaterial: apple.material,
    }
  } catch (error) {
    dispose()
    throw error
  }
}
