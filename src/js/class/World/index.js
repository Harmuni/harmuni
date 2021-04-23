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
    const loaderManager = new THREE.LoadingManager();
    const GlbLoader = new GLTFLoader(loaderManager)

    const terrain = new THREE.Group
    terrain.name = "Terrain"
    scene.add(terrain)
    
    let ground
    this.generateGround(GlbLoader, terrain)
    this.generateEnvironment(GlbLoader, terrain)
    loaderManager.onLoad = function () {
      
    };

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
  generateGround (GlbLoader, terrain) {
    // const terrainLoader = new GLTFLoader()

    // let terrain = new THREE.Group
    // terrain.name = "Terrain"
    // scene.add(terrain)

    // terrainLoader.load(
    //   'mountain.glb',
    //   function (gltf) {
    //     terrain = gltf.scene.children[4]
    //     terrain.scale.set(15, -15, 15)
    //     terrain.position.set(0, 0, 0)
    //     terrain.name = 'Landscape'

    //     terrain.traverse((node) => {
    //       if (!node.isMesh) return null
    //       node.material.wireframe = true
    //       node.material.doubleSided = true
    //     })

    //     scene.add(terrain)
    //   },
    //   undefined,
    //   function (error) {
    //     console.error(error)
    //   }
    // )

        GlbLoader.load(
        'scène_terrain.glb',
        function (gltf) {
            gltf.scene.scale.set(6,6,6)
            gltf.scene.name = "Ground"
            terrain.add(gltf.scene)
        },
        undefined,
        function (error) {
          console.error(error)
        }
      )

    // return { terrain }
  }

  generateEnvironment (GlbLoader, terrain) {

    GlbLoader.load(
      'scène_colonne.glb',
      function (gltf) {
          gltf.scene.scale.set(6,6,6)
          gltf.scene.name = "Colonne"

          let column1 =  gltf.scene.clone()
          column1.position.set(60,0,0)

          let column3 =  gltf.scene.clone()
          column3.position.set(120,0,60)

          let column4 =  gltf.scene.clone()
          column4.position.set(-60,0,60)

          terrain.add(gltf.scene, column1, column3, column4)
      },
      undefined,
      function (error) {
        console.error(error)
      }
    )

    GlbLoader.load(
      'scène_arbre.glb',
      function (gltf) {
          gltf.scene.scale.set(6,6,6)
          gltf.scene.name = "Arbre"

          let arbre1 =  gltf.scene.clone()
          arbre1.position.set(60,0,0)

          let arbre3 =  gltf.scene.clone()
          arbre3.position.set(120,0,60)

          let arbre4 =  gltf.scene.clone()
          arbre4.position.set(-60,0,60)

          terrain.add(gltf.scene, arbre1, arbre3, arbre4)
      },
      undefined,
      function (error) {
        console.error(error)
      }
    )

    GlbLoader.load(
      'scène_arche.glb',
      function (gltf) {
          gltf.scene.scale.set(6,6,6)
          gltf.scene.name = "Arche"
          terrain.add(gltf.scene)
      },
      undefined,
      function (error) {
        console.error(error)
      }
    )

    GlbLoader.load(
      'scène_plaque.glb',
      function (gltf) {
          gltf.scene.scale.set(6,6,6)
          gltf.scene.name = "Stèle"
          terrain.add(gltf.scene)
      },
      undefined,
      function (error) {
        console.error(error)
      }
    )

  }

}
