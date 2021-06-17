import { ACESFilmicToneMapping, AmbientLight, CubeTextureLoader, DirectionalLight, Group, HemisphereLight, LoadingManager, Mesh, sRGBEncoding, Vector3 } from 'three'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Sky } from 'three/examples/jsm/objects/Sky'
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
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
    // const size = 100
    // const divisions = 100
    // const gridHelper = new GridHelper(size, divisions)
    // this.scene.add(gridHelper)
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
        if (model.rotation) {
          gltf.scene.rotation.set(model.rotation.x, model.rotation.y, model.rotation.z)
        }
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

  // invokeModel ({ glbLoader, terrain, model }) {
  //   glbLoader.load(
  //     model.mesh,
  //     (gltf) => {
  //       if (model.scaleRatio.x && model.scaleRatio.y && model.scaleRatio.z) {
  //         gltf.scene.scale.set(model.scaleRatio.x, model.scaleRatio.y, model.scaleRatio.z)
  //       } else if (model.scaleRatio) {
  //         gltf.scene.scale.setScalar(model.scaleRatio)
  //       }

  //       if (model.rotation) {
  //         gltf.scene.rotation.set(model.rotation.x, model.rotation.y, model.rotation.z)
  //       }

  //       gltf.scene.position.set(model.position.x, model.position.y, model.position.z)
  //       gltf.scene.name = model.name

  //       // if (!model.clones) {
  //       //   terrain.add(gltf.scene)
  //       // } else {
  //       //   let bufferOfClones = []
  //       //   bufferOfClones.push(gltf.scene)
  //       //   bufferOfClones = this.clonesModel({
  //       //     clones: model.clones,
  //       //     terrain,
  //       //     gltf,
  //       //     bufferOfClones
  //       //   })

  //       //   bufferOfClones.map((clone, id1) => {
  //       //     if (clone.type === 'Group') {
  //       //       clone.children.map((cloneChild, id2) => {
  //       //         if (cloneChild.type === 'Group') {
  //       //           cloneChild.children.map((element, id3) => {
  //       //             bufferOfClones.push(element)
  //       //           })
  //       //           delete cloneChild[id2]
  //       //         } else if (cloneChild.geometry) {
  //       //           bufferOfClones.push(cloneChild)
  //       //         }
  //       //       })
  //       //       bufferOfClones.splice(id1, 1)
  //       //     } else if (clone.geometry) {
  //       //       bufferOfClones.push(clone)
  //       //     }
  //       //   })
  //       //   console.log(bufferOfClones)
  //       }

  //       return 1
  //     },
  //     undefined,
  //     (error) => {
  //       console.error(error)
  //       return -1
  //     }
  //   )
  // }

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

  // clonesModel ({ clones, terrain, gltf, bufferOfClones }) {
  //   Object.keys(clones).map((clone, id) => {
  //     const toClone = gltf.scene.clone()
  //     toClone.name = toClone.name + '-' + (id + 1)
  //     toClone.position.set(
  //       clones[clone].position.x,
  //       clones[clone].position.y,
  //       clones[clone].position.z
  //     )
  //     if (clones[clone].scale) {
  //       if (clones[clone].scaleRatio.x && clones[clone].scaleRatio.y && clones[clone].scaleRatio.z) {
  //         console.log(clones[clone])
  //         toClone.scale.set(
  //           clones[clone].scaleRatio.x,
  //           clones[clone].scaleRatio.y,
  //           clones[clone].scaleRatio.z
  //         )
  //       } else if (clones[clone].scale === Number) {
  //         toClone.scale.setScalar(clones[clone].scaleRatio)
  //       }
  //     }
      
  //     // bufferOfClones.push(toClone)
      
  //     // toClone.children.map(c => {
  //     //   if (c.type === 'Group') {
  //     //     c.children.map(d => {
  //     //       if (d.geometry) {
  //     //         bufferOfClones.push(d)
  //     //       }
  //     //     })
  //     //   } else if (c.geometry) {
  //     //     const cloned = c.geometry.clone()
  //     //     cloned.applyMatrix4(c.matrixWorld)
  //     //     bufferOfClones.push(cloned)
  //     //   }
  //     // })
  //     return 1
  //   })
  //   // console.log('bufferOfClones test ', bufferOfClones)

  //   // const mergedClones = BufferGeometryUtils.mergeBufferGeometries(bufferOfClones, false)
  //   // const meshMergedClones = new Mesh(mergedClones)
  //   // terrain.add(meshMergedClones)

  //   return toClone
  // }

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
    renderer.outputEncoding = sRGBEncoding
    renderer.toneMapping = ACESFilmicToneMapping
    renderer.toneMappingExposure = 1
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
      turbidity: 3,
      rayleigh: 0.685,
      mieCoefficient: 0.02,
      mieDirectionalG: 0.984,
      luminance: 7,
      inclination: 0.16,
      elevation: 10,
      azimuth: 0.37,
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

      sun.setFromSphericalCoords(1, phi, theta)

      uniforms.sunPosition.value.copy(sun)
      renderer.toneMappingExposure = effectController.exposure
    }

    const gui = new GUI()
    gui.add(effectController, 'turbidity', 0.0, 20.0, 0.1).onChange(guiChanged)
    gui.add(effectController, 'rayleigh', 0.0, 4, 0.001).onChange(guiChanged)
    gui.add(effectController, 'mieCoefficient', 0.0, 0.1, 0.001).onChange(guiChanged)
    gui.add(effectController, 'mieDirectionalG', 0.0, 1, 0.001).onChange(guiChanged)
    gui.add(effectController, 'luminance', 0.0, 20.0, 0.1).onChange(guiChanged)
    gui.add(effectController, 'inclination', 0, 1, 0.0001).onChange(guiChanged)
    gui.add(effectController, 'azimuth', 0, 1, 0.0001).onChange(guiChanged)
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
    this.invokeModel({
      glbLoader,
      terrain,
      model: {
        name: 'Landscape',
        mesh: LandscapeModel,
        position: { z: -4.34, x: 6.65, y: 0 },
        scaleRatio: 1
      }
    })
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
