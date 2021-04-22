import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise'
import { fogParsVert, fogVert, fogParsFrag, fogFrag } from '../../../assets/shaders/FogReplace'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import { Sky } from 'three/examples/jsm/objects/Sky'

export default class World {
  constructor ({ renderer }) {
    this.renderer = renderer
    // Instance scene and generate light and terrain with
    this.scene = new THREE.Scene()
    this.generateLight({ scene: this.scene })
    this.generateTerrain({ scene: this.scene })
    this.generateSkybox({ scene: this.scene, renderer: this.renderer, typeOfSkybox: 'skyShader' })

    return { scene: this.scene }
  }

  /**
   * Generate lights
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
   * Generate terrain mesh
   */
  generateTerrain ({ scene }) {
    const terrainLoader = new GLTFLoader()
    terrainLoader.load(
      'mountain.glb',
      function (gltf) {
        const terrain = gltf.scene.children[4]
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
  }

  /**
   * Generate and select a type of skybox
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
