import { ACESFilmicToneMapping, AmbientLight, CubeTextureLoader, DirectionalLight, Group, HemisphereLight, LoadingManager, Mesh, MeshBasicMaterial, MeshStandardMaterial, MirroredRepeatWrapping, sRGBEncoding, TextureLoader, Vector2, Vector3 } from 'three'
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Sky } from 'three/examples/jsm/objects/Sky'
import { LandscapeModel } from '../../../assets/meshes'
import { BackFace, DownFace, FrontFace, LeftFace, RightFace, UpFace } from '../../../assets/skybox'
import WorldConfiguration from '../../constants/WorldConfiguration'
import { Component } from '../EntityComponent'
import { NormalMapColumn3 } from '../../../assets/textures'
import { RepeatWrapping, WrapAroundEnding } from 'three/build/three.module'
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

  invokesModels ({ glbLoader, terrain, models }) {
    Object.keys(models).map((model, id) => {
      return this.invokeModel({
        glbLoader,
        terrain,
        model: models[model]
      })
    })
  }

  invokeModel ({ glbLoader, terrain, model }) {
    const modelBuffer = []
    glbLoader.load(
      model.mesh,
      (gltf) => {
        if (model.scaleRatio.x && model.scaleRatio.y && model.scaleRatio.z) {
          gltf.scene.scale.set(model.scaleRatio.x, model.scaleRatio.y, model.scaleRatio.z)
        } else if (model.scaleRatio) {
          gltf.scene.scale.setScalar(model.scaleRatio)
        }

        if (model.rotation) {
          gltf.scene.rotation.set(
            Math.degToRad(model.rotation.x),
            Math.degToRad(model.rotation.y),
            Math.degToRad(model.rotation.z)
          )
        }

        gltf.scene.traverse((obj) => {
          if (obj.isMesh) {
            if (model.texture) {
              const loader = new TextureLoader()
              const diffuse = loader.load(model.texture)
              const nmap = loader.load(NormalMapColumn3)
              const material = new MeshStandardMaterial({
                color: 0xFFFFFF,
                map: diffuse,
                normalMap: nmap
              })
              obj.material = material
            }
          }
        })

        gltf.scene.position.set(model.position.x, model.position.y, model.position.z)
        gltf.scene.name = model.name

        if (model.clones) {
          terrain.add(gltf.scene)
          // gltf.scene.traverse((obj) => {
          //   if (obj.isMesh) {
          //     const geometryCloned = obj.geometry.clone()
          //     geometryCloned.applyMatrix4(obj.matrixWorld)
          //     modelBuffer.push(geometryCloned)
          //   }
          // })
          this.clonesModel({
            model: model,
            terrain,
            gltf,
            modelBuffer
          })
          // // this.mergeModel({ modelToMerge: gltf.scene, modelBuffer })
          // console.log('modelBuffer Final', modelBuffer)
          // const mergedClones = BufferGeometryUtils.mergeBufferGeometries(modelBuffer, false)
          // const meshMergedClones = new Mesh(mergedClones)
          // meshMergedClones.scaleRatio = 5
          // meshMergedClones.name = model.name
          // terrain.add(meshMergedClones)
        } else {
          terrain.add(gltf.scene)
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

  clonesModel ({ model, terrain, gltf, modelBuffer }) {
    const clones = model.clones
    Object.keys(clones).map((clone, id) => {
      const toClone = gltf.scene.clone()
      toClone.name = toClone.name + '-' + (id + 1)

      if (model.position) {
        toClone.position.set(
          clones[clone].position.x,
          clones[clone].position.y,
          clones[clone].position.z
        )
      }

      if (model.rotation) {
        toClone.rotation.set(
          Math.degToRad(model.rotation.x),
          Math.degToRad(model.rotation.y),
          Math.degToRad(model.rotation.z)
        )
      }

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

      // toClone.traverse((obj) => {
      //   if (obj.isMesh) {
      //     const geometryCloned = obj.geometry.clone()
      //     geometryCloned.applyMatrix4(obj.matrixWorld)
      //     modelBuffer.push(geometryCloned)
      //   }
      // })

      // this.mergeModel({ modelToMerge: toClone, modelBuffer })

      return 1
    })
    return 1
  }

  // mergeModel ({ modelToMerge, modelBuffer }) {
  //   modelToMerge.children.map(model => {
  //     if (model.type === 'Group') {
  //       model.children.map(model2 => {
  //         if (model2.geometry) {
  //           modelBuffer.push(model2)
  //         }
  //         return 1
  //       })
  //     } else if (model.geometry) {
  //       const cloned = model.geometry.clone()
  //       cloned.applyMatrix4(model.matrixWorld)
  //       modelBuffer.push(cloned)
  //     }

  //     return 1
  //   })
  //   return modelBuffer

  //   // console.error('Error merging models', modelsBuffer)
  //   // return -1
  // }

  // mergeModel ({ modelToMerge, modelBuffer }) {
  //   modelToMerge.children.map(child => {
  //     if (child.geometry) {
  //       const geometry = child.geometry.clone()
  //       geometry.applyMatrix4(child.matrixWorld)
  //       modelBuffer.push(geometry)
  //       return 1
  //     } else if (child.type === 'Group') {
  //       child.children.map(child2 => {
  //         if (child2.geometry) {
  //           modelBuffer.push(child2)
  //         }
  //         return 1
  //       })
  //     } else if (child.type === 'Object3D') {
  //       console.log('Le reste', child)
  //       const object3d = child.clone()
  //       object3d.applyMatrix4(child.matrixWorld)
  //       modelBuffer.push(object3d)
  //     }
  //     return 1
  //   })
  //   return modelBuffer
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
