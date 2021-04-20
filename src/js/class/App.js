import * as THREE from 'three'
import Camera from './Camera/index'
import Player from './Player/index'
import World from './World/index'

export default class App {
  /*
   * Constructor of app
   */
  constructor (options) {
    this.world = {}
    this.camera = {}
    this.player = {}
    this.mixers = []
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    this.renderer = {}

    // Create app
    const app = this.renderApp()
    window.requestAnimationFrame(app)
  }

  /**
   * Render & Animation
   */
  renderApp () {
    const renderer = this.setScene()

    // Instance world, camera and player
    this.world = new World()
    this.player = new Player({
      scene: this.world.scene
    })
    this.camera = new Camera({
      scene: this.world.scene,
      sizes: this.sizes,
      renderer,
      player: this.player,
      typeOfCamera: 'thirdPersonView'
    })

    const clock = new THREE.Clock()
    const render = () => {
      window.requestAnimationFrame(render)
      const deltaTime = clock.getDelta()

      // Update of instance
      this.mixers?.map(m => m.update(deltaTime))
      this.player?.update(deltaTime)
      this.camera?.update(deltaTime)

      renderer.render(this.world.scene, this.camera.threeCamera)
    }
    return render
  }

  /**
   * Method to set scene with creation of canvas html and three renderer
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
