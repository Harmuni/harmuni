import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default class World {
  constructor (options) {
    // Scene
    const scene = new THREE.Scene()

    // Lighting
    const light = new THREE.DirectionalLight('#ffffff')
    light.position.set(0, 5, 5)
    scene.add(light)

    const ambientLight = new THREE.AmbientLight('#ffffff', 0.25)
    scene.add(ambientLight)

    const terrain = this.generateTerrain(scene)
    return { scene, terrain }
  }

  /* Generate terrain mesh */
  generateTerrain (scene) {
    const terrainLoader = new GLTFLoader()
    let terrain
    terrainLoader.load(
      'mountain.glb',
      function (gltf) {
        terrain = gltf.scene.children[4]
        terrain.scale.set(15, -15, 15)
        terrain.position.set(0, 0, 0)
        terrain.name = 'Landscape'

        terrain.traverse((node) => {
          if (!node.isMesh) return null
          node.material.wireframe = true
          node.material.doubleSided = true
        })

        scene.add(terrain)
      },
      undefined,
      function (error) {
        console.error(error)
      }
    )
    return { terrain }
  }
}
