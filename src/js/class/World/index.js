import * as THREE from 'three'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Sky } from 'three/examples/jsm/objects/Sky'

export default class World {
  /**
   * @constructor of World
   * @returns {Object} {scene: scene}
   */
  constructor ({ renderer }) {
    this.renderer = renderer
    // Instance scene and generate light and terrain with
    this.scene = new THREE.Scene()
    this.generateLight({ scene: this.scene })
    this.generateSkybox({ scene: this.scene, renderer: this.renderer, typeOfSkybox: 'skyShader' })

    // Loaders
    const loaderManager = new THREE.LoadingManager();
    const GlbLoader = new GLTFLoader(loaderManager)
    
    // Terrain
    const terrain = new THREE.Group
    terrain.name = "Terrain"
    this.scene.add(terrain)
    
    this.generateGround(GlbLoader, terrain)
    this.generateEnvironment(GlbLoader, terrain)

    return { scene: this.scene, terrain }
  }

  /**
   * Generate lights
   * @returns {void}
   */
  generateLight ({ scene }) {
    const light = new THREE.DirectionalLight('#ffffff')
    const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
    const hemiLight = new THREE.HemisphereLight('0x0000ff', '0x00ff00', 0.6)

    light.position.set(0, 5, 5)

    scene.add(light)
    scene.add(ambientLight)
    scene.add(hemiLight)
  }

  /**
   * Generate ground mesh
   **/
  generateGround (GlbLoader, terrain) {

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

  }

    /**
   * Generate environment meshes
   **/
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

  /**
   * Generate and select a type of skybox
   * @returns {void}
   */
  generateSkybox ({ scene, renderer, typeOfSkybox }) {
    switch (typeOfSkybox) {
      case 'skyShader':
        this.setSkyShader({ scene, renderer })
        break
      case 'skyTexture':
        this.setSkyTexture({ scene })
        break
      default:
        this.setSkyTexture({ scene })
        break
    }
  }

  /**
   * Method to set sky shader for skybox
   * @returns {void}
   */
  setSkyShader ({ scene, renderer }) {
    // Instance Sky
    const sky = new Sky()
    sky.scale.setScalar(450000)
    scene.add(sky)

    const sun = new THREE.Vector3()

    /// GUI CONTROLLERS SKY PARAMETERS
    const effectController = {
      turbidity: 10,
      rayleigh: 3,
      mieCoefficient: 0.005,
      mieDirectionalG: 0.7,
      inclination: 0.49, // elevation / inclination
      azimuth: 0.25, // Facing front,
      exposure: renderer.toneMappingExposure
    }

    const guiChanged = () => {
      const uniforms = sky.material.uniforms
      uniforms.turbidity.value = effectController.turbidity
      uniforms.rayleigh.value = effectController.rayleigh
      uniforms.mieCoefficient.value = effectController.mieCoefficient
      uniforms.mieDirectionalG.value = effectController.mieDirectionalG

      const theta = Math.PI * (effectController.inclination - 0.5 )
      const phi = 2 * Math.PI * (effectController.azimuth - 0.5 )

      sun.x = Math.cos(phi)
      sun.y = Math.sin(phi) * Math.sin(theta)
      sun.z = Math.sin(phi) * Math.cos(theta)

      uniforms.sunPosition.value.copy(sun)
      renderer.toneMappingExposure = effectController.exposure
    }

    const gui = new GUI()
    gui.add(effectController, 'turbidity', 0.0, 20.0, 0.1).onChange(guiChanged)
    gui.add(effectController, 'rayleigh', 0.0, 4, 0.001).onChange(guiChanged)
    gui.add(effectController, 'mieCoefficient', 0.0, 0.1, 0.001).onChange(guiChanged)
    gui.add(effectController, 'mieDirectionalG', 0.0, 1, 0.001).onChange(guiChanged)
    gui.add(effectController, 'inclination', 0, 1, 0.0001).onChange(guiChanged)
    gui.add(effectController, 'azimuth', 0, 1, 0.0001).onChange(guiChanged)
    gui.add(effectController, 'exposure', 0, 1, 0.0001).onChange(guiChanged)

    guiChanged()
  }

  /**
   * Method to set sky texture for skybox
   * @returns {void}
   */
  setSkyTexture ({ scene }) {
    const loader = new THREE.CubeTextureLoader()
    const texture = loader?.load([
      '/skybox/front_face.jpg',
      '/skybox/back_face.jpg',
      '/skybox/up_face.jpg',
      '/skybox/down_face.jpg',
      '/skybox/left_face.jpg',
      '/skybox/right_face.jpg'
    ])
    texture.encoding = THREE.sRGBEncoding
    scene.background = texture
  }

}
