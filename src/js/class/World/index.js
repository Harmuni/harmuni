import { AmbientLight, CubeTextureLoader, DirectionalLight, Group, HemisphereLight, LoadingManager, sRGBEncoding, Vector3 } from 'three'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Sky } from 'three/examples/jsm/objects/Sky'
import { LandscapeModel } from '../../../assets/meshes'
import { BackFace, DownFace, FrontFace, LeftFace, RightFace, UpFace } from '../../../assets/skybox'
import WorldConfiguration from '../../constants/WorldConfiguration'
import { Component } from '../EntityComponent'
export default class World extends Component {
  /**
   * @constructor of World
   * @param {Object} {{Object} renderer}
   * @returns {Object} {scene: {Object}scene}
   */
  constructor ({ renderer, scene }) {
    super()
    this.renderer = renderer
    this.scene = scene

    this.terrain = new Group()
    this.terrain.name = 'Terrain'
    this.scene.add(this.terrain)

    // Loaders
    const loaderManager = new LoadingManager()
    const glbLoader = new GLTFLoader(loaderManager)

    // Generate light and terrain
    this.generateLight({ scene: this.scene })
    this.generateSkybox({ scene: this.scene, renderer: this.renderer, typeOfSkybox: 'skyShader' })
    this.generateLandscape({ glbLoader, terrain: this.terrain })
    this.generateEnvironment({ glbLoader, terrain: this.terrain })
  }

  invokeModel ({ glbLoader, terrain, model }) {
    glbLoader.load(
      model.mesh,
      (gltf) => {
        if (model.scaleRatio.x && model.scaleRatio.y && model.scaleRatio.z) {
          gltf.scene.scale.set(model.scaleRatio.x, model.scaleRatio.y, model.scaleRatio.z)
        } else if (model.scaleRatio) {
          gltf.scene.scale.setScalar(model.scaleRatio)
        }

        gltf.scene.position.set(model.position.x, model.position.y, model.position.z)
        gltf.scene.name = model.name
        terrain.add(gltf.scene)

        if (model.clones) {
          this.clonesModel({
            clones: model.clones,
            terrain,
            gltf
          })
        }

        return 1
      },
      undefined,
      (error) => {
        console.error(error)
        return -1
      }
    )
  }

  invokesModels ({ glbLoader, terrain, models }) {
    Object.keys(models).map((model, id) => {
      return this.invokeModel({
        glbLoader,
        terrain,
        model: models[model]
      })
    })
  }

  clonesModel ({ clones, terrain, gltf }) {
    Object.keys(clones).map((clone, id) => {
      const toClone = gltf.scene.clone()
      toClone.name = toClone.name + '-' + (id + 1)
      toClone.position.set(
        clones[clone].position.x,
        clones[clone].position.y,
        clones[clone].position.z
      )
      if (clones[clone].scale) {
        if (clones[clone].scaleRatio.x && clones[clone].scaleRatio.y && clones[clone].scaleRatio.z) {
          console.log(clones[clone])
          toClone.scale.set(
            clones[clone].scaleRatio.x,
            clones[clone].scaleRatio.y,
            clones[clone].scaleRatio.z
          )
        } else if (clones[clone].scale === Number) {
          toClone.scale.setScalar(clones[clone].scaleRatio)
        }
      }
      terrain.add(toClone)
      return toClone
    })
  }

  /**
   * Generate lights
   * @param {Object} {{Object} scene}
   * @returns {void}
   */
  generateLight ({ scene }) {
    const light = new DirectionalLight('#ffffff')
    const ambientLight = new AmbientLight('#ffffff', 0.5)
    const hemiLight = new HemisphereLight('0x0000ff', '0x00ff00', 0.6)

    light.position.set(0, 5, 5)

    scene.add(light)
    scene.add(ambientLight)
    scene.add(hemiLight)
  }

  /**
   * Generate and select a type of skybox
   * @param {Object} {{Object} scene, {Object} renderer, {Object} typeOfSkybox}
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
   * @param {Object} {{Object} scene, {Object} renderer}
   * @returns {void}
   */
  setSkyShader ({ scene, renderer }) {
    // Instance Sky
    const sky = new Sky()
    sky.scale.setScalar(450000)
    scene.add(sky)

    const sun = new Vector3()

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

      const theta = Math.PI * (effectController.inclination - 0.5)
      const phi = 2 * Math.PI * (effectController.azimuth - 0.5)

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
   * @param {Object} {{Object} scene}
   * @returns {void}
   */
  setSkyTexture ({ scene }) {
    const loader = new CubeTextureLoader()
    const texture = loader?.load([
      FrontFace,
      BackFace,
      UpFace,
      DownFace,
      LeftFace,
      RightFace
    ])
    texture.encoding = sRGBEncoding
    scene.background = texture
  }

  /**
   * Generate ground mesh
   **/
  generateLandscape ({ glbLoader, terrain }) {
    // this.invokeModel({
    //   glbLoader,
    //   terrain,
    //   model: {
    //     name: 'Landscape',
    //     mesh: LandscapeModel,
    //     position: { z: -5.16105, x: 32.2207, y: 5.03212 },
    //     scaleRatio: { z: 23.5452, x: 23.5452, y: 0.803786 }
    //   }
    // })
    // glbLoader.load(
    //   TerrainModel,
    //   function (gltf) {
    //     gltf.scene.scale.set(6, 6, 6)
    //     gltf.scene.name = 'Ground'
    //     terrain.add(gltf.scene)
    //   },
    //   undefined,
    //   function (error) {
    //     console.error(error)
    //   }
    // )
  }

  /**
   * Generate environment meshes
   **/
  generateEnvironment ({ glbLoader, terrain }) {
    const modelsToLoad = WorldConfiguration()
    this.invokesModels({
      glbLoader,
      terrain,
      models: modelsToLoad
    })
  }
}
