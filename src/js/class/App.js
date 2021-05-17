import * as THREE from 'three'
import Camera from './Camera/index'
import Player from './Player/index'
import World from './World/index'
import { Entity, EntityManager } from './EntityComponent/index'

/**
 * @author Harmuni Developer Team
 * @license ?
 * @version 1.0
 * @class App
 */
export default class App {
  /**
   * @constructor of App
   * @returns {void}
   */
  constructor () {
    this.renderer = {}
    this.camera = {}
    this.scene = {}
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    this.entityManager = {}

    const app = this.main()
    app !== 1 && console.error('Error rendering app')
  }

  /**
   * Main of app, render app and refresh animations
   * @returns {void}
   */
  main () {
    // Set render of app, default property of scene and default property of camera for threejs
    this.renderer = this.setRender()
    this.scene = this.setDefaultScene()
    this.camera = this.setDefaultCamera()

    // Instance entity manager with entity of game
    this.entityManager = new EntityManager()

    const worldEntity = new Entity()
    const playerEntity = new Entity()
    const cameraEntity = new Entity()

    worldEntity.addComponent(new World({
      renderer: this.renderer,
      scene: this.scene
    }))
    playerEntity.addComponent(new Player({
      scene: this.scene,
      terrain: worldEntity.components.World.terrain
    }))
    cameraEntity.addComponent(new Camera({
      scene: this.scene,
      sizes: this.sizes,
      renderer: this.renderer,
      targetToFollow: playerEntity,
      typeOfCamera: 'thirdPersonView'
    }))

    this.entityManager.add(worldEntity, 'worldEntity')
    this.entityManager.add(playerEntity, 'playerEntity')
    this.entityManager.add(cameraEntity, 'cameraEntity')

    console.log(worldEntity)
    console.log(playerEntity)
    console.log(cameraEntity)

    // Affect new camera entity
    this.camera = cameraEntity.components.Camera.threeCamera

    // Clock use to get second and Three clock use perfomance.now and date.now
    const gameLoop = this.gameLoop({ clock: new THREE.Clock() })
    return gameLoop
  }

  /**
   * Method to set render, create canvas html and three renderer
   * @returns {Object} renderer
   */
  setRender () {
    const canvas = document.querySelector('#webgl')
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    })
    renderer.setSize(this.sizes.width, this.sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    return renderer
  }

  setDefaultCamera () {
    const fov = 60
    const aspect = 1920 / 1080
    const near = 1.0
    const far = 1000.0
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(75, 20, 0)
    camera.lookAt(0, 20, 0)
    return camera
  }

  setDefaultScene () {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xFFFFFF)
    scene.fog = new THREE.FogExp2(0x89b2eb, 0.002)
    return scene
  }

  gameLoop ({ clock }) {
    // Render and refresh animation
    const deltaTime = clock.getDelta()
    return window.requestAnimationFrame((t) => {
      this.gameLoop({ clock })
      this.renderer?.render(this.scene, this.camera)
      this.step({ deltaTime })
    })
  }

  step ({ deltaTime }) {
    // Update of entities
    this.entityManager.update(deltaTime)
  }
}
