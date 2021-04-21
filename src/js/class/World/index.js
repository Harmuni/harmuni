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
    // const materialSkybox = []
    // const frontFace = new THREE.TextureLoader().load('/skybox/front_face.jpg')
    // const backFace = new THREE.TextureLoader().load('/skybox/back_face.jpg')
    // const upFace = new THREE.TextureLoader().load('/skybox/up_face.jpg')
    // const downFace = new THREE.TextureLoader().load('/skybox/down_face.jpg')
    // const leftFace = new THREE.TextureLoader().load('/skybox/left_face.jpg')
    // const rightFace = new THREE.TextureLoader().load('/skybox/right_face.jpg')

    // materialSkybox.push(new THREE.MeshBasicMaterial({ map: frontFace }))
    // materialSkybox.push(new THREE.MeshBasicMaterial({ map: backFace }))
    // materialSkybox.push(new THREE.MeshBasicMaterial({ map: upFace }))
    // materialSkybox.push(new THREE.MeshBasicMaterial({ map: downFace }))
    // materialSkybox.push(new THREE.MeshBasicMaterial({ map: leftFace }))
    // materialSkybox.push(new THREE.MeshBasicMaterial({ map: rightFace }))

    // const skyboxGeo = new THREE.BoxGeometry(100000, 100000, 100000)
    // const skybox = new THREE.Mesh(skyboxGeo, materialSkybox)
    // scene.add(skybox)

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
   * */
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
