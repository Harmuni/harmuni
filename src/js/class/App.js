import * as THREE from 'three'
import Camera from './Camera/index'
import Player from './Player/index'
import World from './World/index'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import { Sky } from 'three/examples/jsm/objects/Sky'

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
    this.world = {}
    this.camera = {}
    this.player = {}
    this.mixers = []
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    // Rendering app
    const app = this.main()
    app
      ? window.requestAnimationFrame(app)
      : console.error('Error rendering app')
  }

  /**
   * Main of app, render app and refresh animations
   * @returns {void}
   */
  main () {
    this.renderer = this.setScene()
    // Instance world, camera and player
    this.world = new World({ renderer: this.renderer })
    this.player = new Player({
      scene: this.world.scene, 
      terrain: this.world.terrain
    })
    this.camera = new Camera({
      scene: this.world.scene,
      sizes: this.sizes,
      renderer: this.renderer,
      player: this.player,
      typeOfCamera: 'thirdPersonView'
    })
    // this.setSky()

    // Clock use to get second
    /// Three clock use perfomance.now and date.now
    const clock = new THREE.Clock()
    const appLoop = () => {
      const deltaTime = clock.getDelta()
      // Update of instance
      this.mixers?.map(m => m.update(deltaTime, this._world))
      this.player?.update(deltaTime, this._world)
      this.camera?.update(deltaTime)

      // Render and refresh animation
      this.renderer?.render(this.world.scene, this.camera.threeCamera)
      window.requestAnimationFrame(appLoop)
    }
    return appLoop
  }

  /**
   * Method to set scene, create canvas html and three renderer
   * @returns {object} renderer
   */
  setScene () {
    const canvas = document.querySelector('#webgl')
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    })
    renderer.setSize(this.sizes.width, this.sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    return renderer
  }
}
