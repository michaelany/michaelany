import {Mesh, MeshBasicMaterial, MeshStandardMaterial, Texture} from 'three'
import type {Material} from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js'

import modelUrl from '#assets/models/macbook.glb?url'

export const loadLaptopModel = async (signal: AbortSignal) => {
  const response = await fetch(modelUrl, {signal})
  if (!response.ok) throw new Error(`MacBook model: HTTP ${response.status}`)
  const buffer = await response.arrayBuffer()
  signal.throwIfAborted()
  const {scene: laptop} = await new GLTFLoader()
    .setMeshoptDecoder(MeshoptDecoder)
    .parseAsync(buffer, '')
  const geometries = new Set<Mesh['geometry']>()
  const materials = new Set<Material>()
  const textures = new Set<Texture>()
  const instances: Mesh[] = []
  laptop.traverse(object => {
    if (!(object instanceof Mesh)) return
    geometries.add(object.geometry)
    const objectMaterials = Array.isArray(object.material)
      ? object.material
      : [object.material]
    objectMaterials.forEach(material => {
      materials.add(material)
      Object.assign(material, material.userData.laptop)
      Object.values(material).forEach(value => {
        if (value instanceof Texture) textures.add(value)
      })
    })
    if ('dispose' in object) instances.push(object)
  })
  const dispose = () => {
    instances.forEach(object => {
      if ('dispose' in object && typeof object.dispose === 'function')
        object.dispose()
    })
    geometries.forEach(geometry => geometry.dispose())
    materials.forEach(material => material.dispose())
    textures.forEach(texture => {
      texture.dispose()
      // GLTFLoader uses ImageBitmap where supported; Texture.dispose doesn't close it.
      if (
        typeof ImageBitmap !== 'undefined' &&
        texture.image instanceof ImageBitmap
      )
        texture.image.close()
    })
  }
  const screen = laptop.getObjectByName('Display')
  const apple = laptop.getObjectByName('AppleLogo')
  const lid = laptop.getObjectByName('Lid')
  const hinge = laptop.getObjectByName('LidHinge')
  if (
    signal.aborted ||
    !lid ||
    !hinge ||
    !(screen instanceof Mesh) ||
    !(screen.material instanceof MeshBasicMaterial) ||
    !(apple instanceof Mesh) ||
    !(apple.material instanceof MeshStandardMaterial)
  ) {
    dispose()
    signal.throwIfAborted()
    throw new Error('MacBook model is missing its hinge, lid, display or logo')
  }
  return {
    laptop,
    lid,
    hinge,
    screenMaterial: screen.material,
    appleMaterial: apple.material,
    dispose,
  }
}
