import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export default class World {
  constructor () {
    // Scene
    const scene = new THREE.Scene()

    // Lighting
    const light = new THREE.DirectionalLight('#ffffff')
    light.position.set(0, 5, 5)
    scene.add(light)
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
    scene.add(ambientLight)
    const hemiLight = new THREE.HemisphereLight('0x0000ff', '0x00ff00', 0.6)
    scene.add(hemiLight)

    // Terrain
    const terrain = this.generateTerrain(scene)

    // Skybox
    const loader = new THREE.CubeTextureLoader()
    const texture = loader.load([
      '/skybox/front_face.jpg',
      '/skybox/back_face.jpg',
      '/skybox/up_face.jpg',
      '/skybox/down_face.jpg',
      '/skybox/left_face.jpg',
      '/skybox/right_face.jpg'
    ])
    texture.encoding = THREE.sRGBEncoding
    scene.background = texture

    return { scene, terrain }
  }

  /*
   * Generate terrain mesh
   **/
  generateTerrain (scene) {
    const terrainLoader = new GLTFLoader()
    let terrain
    terrainLoader.load(
      'mountain.glb',
      function (gltf) {
        terrain = gltf.scene.children[4]
        terrain.scale.set(150, -150, 150)
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
