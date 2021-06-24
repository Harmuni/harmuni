import { ACESFilmicToneMapping, AmbientLight, CubeTextureLoader, DirectionalLight, Group, HemisphereLight, LoadingManager, Mesh, MeshBasicMaterial, MeshStandardMaterial, MirroredRepeatWrapping, sRGBEncoding, TextureLoader, Vector2, Vector3 } from 'three'
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Sky } from 'three/examples/jsm/objects/Sky'
import { LandscapeModel, LandscapeTexturedModel } from '../../../assets/meshes'
import { BackFace, DownFace, FrontFace, LeftFace, RightFace, UpFace } from '../../../assets/skybox'
import WorldConfiguration from '../../constants/WorldConfiguration'
import { Component } from '../EntityComponent'
import { MathUtils } from 'three/build/three.module'
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

    // Loaders of models
    const loaderManager = new LoadingManager()
    const glbLoader = new GLTFLoader(loaderManager)
    // Generate map elements
    let isGenerate = true
    isGenerate = this.generateLight({ scene: this.scene })
    isGenerate = this.generateSkybox({ scene: this.scene, renderer: this.renderer, typeOfSkybox: 'skyShader' })
    isGenerate = this.generateLandscape({ glbLoader, terrain: this.terrain })
    isGenerate = this.generateEnvironment({ glbLoader, terrain: this.terrain })
    console.assert(isGenerate, 'World generation failed')
  }

  /**
   * Invokes multiple models meshes
   * @param {Object} { {Object} glbLoader, {Object} terrain, {Object} models }
   * @returns {void}
   */
  invokesModels ({ glbLoader, terrain, models }) {
    Object.keys(models).map((model, id) => {
      return this.invokeModel({
        glbLoader,
        terrain,
        model: models[model]
      })
    })
  }


  /**
   * Invoke one model mesh
   * @param {Object} { {Object} glbLoader, {Object} terrain, {Object} model }
   * @returns {void}
   */
  invokeModel ({ glbLoader, terrain, model }) {
    const modelBuffer = []
    glbLoader.load(
      model.mesh,
      (gltf) => {
        // Add model scale ratio
        if (model.scaleRatio.x && model.scaleRatio.y && model.scaleRatio.z) {
          gltf.scene.scale.set(model.scaleRatio.x, model.scaleRatio.y, model.scaleRatio.z)
        } else if (model.scaleRatio) {
          gltf.scene.scale.setScalar(model.scaleRatio)
        }

        // Add model rotation
        if (model.rotation) {
          gltf.scene.rotation.set(
            MathUtils.degToRad(model.rotation.x),
            MathUtils.degToRad(model.rotation.y),
            MathUtils.degToRad(model.rotation.z)
          )
        }

        // Add model texture
        if (model.texture) {
          gltf.scene.traverse((obj) => {
            if (obj.isMesh) {
              const loader = new TextureLoader()
              const defaultColor = 0xFFFFFF
              const material = new MeshStandardMaterial({
                color: defaultColor,
                map: model.texture.map ? loader.load(model.texture.map) : null,
                normalMap: model.texture.nMap ? loader.load(model.texture.nMap) : null,
                // aoMap: model.texture.aoMap ? loader.load(model.texture.aoMap) : null
              })
              obj.material = material
            }
          })
        }

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
          // console.log('modelBuffer Final', modelBuffer)
          // const mergedClones = BufferGeometryUtils.mergeBufferGeometries(modelBuffer, false)
          // const meshMergedClones = new Mesh(mergedClones)
          // meshMergedClones.scaleRatio = 5
          // meshMergedClones.name = model.name
          // terrain.add(meshMergedClones)
        } else {
          terrain.add(gltf.scene)
        }
        return true
      },
      undefined,
      (error) => {
        console.error(`ERROR :: ${error} : Mesh is not loaded`)
        return false
      }
    )
  }

  /**
   * Clones one type of model mesh
   * @param {Object} { {Object} model, {Object} terrain, {Object} gltf }
   * @returns {boolean}
   */
  clonesModel ({ model, terrain, gltf, modelBuffer }) {
    const clones = model.clones
    Object.keys(clones).map((clone, id) => {
      const toClone = gltf.scene.clone()
      toClone.name = toClone.name + '-' + (id + 1)

      // Apply position of clone
      if (clones[clone].position) {
        toClone.position.set(
          clones[clone].position.x,
          clones[clone].position.y,
          clones[clone].position.z
        )
      }

      // Apply rotation of clone
      if (clones[clone].rotation) {
        toClone.rotation.set(
          MathUtils.degToRad(clones[clone].rotation.x),
          MathUtils.degToRad(clones[clone].rotation.y),
          MathUtils.degToRad(clones[clone].rotation.z)
        )
      }

      // Apply cale of clone
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

      return true
    })
    return true
  }

  /**
   * Generate lights in the scene
   * @param {Object} {{Object} scene}
   * @return {boolean}
   */
  generateLight ({ scene }) {
    const light = new DirectionalLight('#ffffff')
    const ambientLight = new AmbientLight('#ffffff', 0.5)
    const hemiLight = new HemisphereLight('0x0000ff', '0x00ff00', 0.6)

    light.position.set(0, 5, 5)

    scene.add(light)
    scene.add(ambientLight)
    scene.add(hemiLight)
    return true
  }

  /**
   * Generate and select a type of skybox
   * @param {Object} { {Object} scene, {Object} renderer, {Object} typeOfSkybox }
   * @return {boolean}
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
    return true
  }

  /**
   * Method to set sky shader for skybox
   * @param {Object} { {Object} scene, {Object} renderer }
   * @returns {void}
   */
  setSkyShader ({ scene, renderer }) {
    // Instance Sky
    const sky = new Sky()
    sky.scale.setScalar(450000)
    scene.add(sky)

    const sun = new Vector3()

    // Gui controllers for sky parameters
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
   * @param {Object} { {Object} glbLoader, {Object} terrain }
   * @return {boolean}
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
    return true
  }

  /**
   * Generate environment meshes
   * @param {Object} { {Object} glbLoader, {Object} terrain }
   * @return {boolean}
   **/
  generateEnvironment ({ glbLoader, terrain }) {
    const modelsToLoad = WorldConfiguration()
    this.invokesModels({
      glbLoader,
      terrain,
      models: modelsToLoad
    })
    return true
  }
}
