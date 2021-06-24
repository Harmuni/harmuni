import { Clock, Color, FogExp2, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import Camera from '../Camera/index'
import { Entity, EntityManager } from '../EntityComponent/index'
import SquareEventArea from '../EventArea/SquareEventArea'
import Pause from '../Pause'
import Player from '../Player/index'
import PlayerZone from '../PlayerZone'
import MusicPlayer from '../MusicPlayer'
import World from '../World/index'

export default class Game {
  /**
   * @constructor of Game
   * @returns {void}
   */
  constructor ({ canvas }) {
    this.canvas = canvas
    this.renderer = {}
    this.camera = {}
    this.player = {}
    this.scene = {}
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    this.entityManager = {}

    const game = this.launchGame()
    game !== 1 && console.error('Error rendering game')
  }

  /**
   * Launch the game, render app and refresh animations
   * @returns {void}
   */
  launchGame () {
    // Set render of app, default property of scene and default property of camera for threejs
    this.renderer = this.setRender()
    this.scene = this.setDefaultScene()
    this.camera = this.setDefaultCamera()

    // Instance entity manager with entity of game
    this.entityManager = new EntityManager()

    const worldEntity = new Entity()
    const playerEntity = new Entity()
    const cameraEntity = new Entity()
    const playerZoneEntity = new Entity()
    const pauseEntity = new Entity()
    const eventAreaEntity = new Entity()
    const musicPlayerEntity = new Entity()

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
    playerZoneEntity.addComponent(new PlayerZone({
      player: playerEntity,
      camera: cameraEntity,
      terrain: worldEntity.components.World.terrain
    }))
    pauseEntity.addComponent(new Pause())
    musicPlayerEntity.addComponent(new MusicPlayer({
      civilisation: 'luma',
      camera: this.camera,
      scene: this.scene
    }))
    eventAreaEntity.addComponent(new SquareEventArea({
      targetToEmit: playerEntity,
      action: () => {
        console.log('HOLA BUENOS DIAS AMIGO')
      },
      area: {
        A: { x: 4, z: 8 },
        B: { x: 8, z: 8 },
        C: { x: 4, z: 4 },
        D: { x: 8, z: 4 }
      }
    }))

    this.entityManager.add(worldEntity, 'worldEntity')
    this.entityManager.add(playerEntity, 'playerEntity')
    this.entityManager.add(cameraEntity, 'cameraEntity')
    this.entityManager.add(playerZoneEntity, 'playerZoneEntity')
    this.entityManager.add(pauseEntity, 'pauseEntity')
    this.entityManager.add(eventAreaEntity, 'eventAreaEntity')
    this.entityManager.add(musicPlayerEntity, 'musicPlayerEntity')

    console.log(worldEntity)
    console.log(playerEntity)
    console.log(cameraEntity)
    console.log(playerZoneEntity)
    console.log(pauseEntity)
    console.log(eventAreaEntity)

    // Affect alias for new camera entity
    this.camera = cameraEntity.components.Camera.threeCamera

    // Clock use to get second and Three clock use perfomance.now and date.now
    const gameLoop = this.gameLoop({ clock: new Clock() })
    return gameLoop
  }

  /**
   * Method to set render, create canvas html and three renderer
   * @returns {Object} renderer
   */
  setRender () {
    const canvas = document.getElementById('webgl')
    const renderer = new WebGLRenderer({
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
    const camera = new PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(75, 20, 0)
    camera.lookAt(0, 20, 0)
    return camera
  }

  setDefaultScene () {
    const scene = new Scene()
    scene.background = new Color(0xFFFFFF)
    scene.fog = new FogExp2(0xf1eae1, 0.08)
    return scene
  }

  gameLoop ({ clock }) {
    // Render and refresh animation
    const deltaTime = clock.getDelta()
    const refresh = window.requestAnimationFrame((t) => {
      this.gameLoop({ clock })
      this.renderer?.render(this.scene, this.camera)
      this.step({ deltaTime })
    })
    if (refresh >= 0) {
      return 1
    } else {
      return -1
    }
  }

  step ({ deltaTime }) {
    // Update of entities
    this.entityManager.update(deltaTime)
  }
}
