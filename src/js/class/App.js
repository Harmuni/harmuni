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
    this.camera = new Camera({
      scene: this.world.scene,
      sizes: this.sizes,
      renderer
    })
    this.player = new Player({
      scene: this.world.scene
    })

    const raycaster = new THREE.Raycaster()
    const clock = new THREE.Clock()

    const render = () => {
      window.requestAnimationFrame(render)
      const deltaTime = clock.getDelta()

      // Update of instance
      this.mixers?.map(m => m.update(deltaTime))
      this.player?.update(deltaTime)
      this.camera.orbitControls?.update()
      // Implement third person camera
      // this.thirdPersonCamera = null
      // this.thirdPersonCamera?.update(elapsedTimeSc)

      renderer.render(this.world.scene, this.camera.camera)

      // Raycaster update mesh position
      const rayOrigin = new THREE.Vector3(
        this.player.position.x,
        this.player.position.y,
        this.player.position.z
      )
      const rayDirection = new THREE.Vector3(0, -1, 0)
      rayDirection.normalize()
      raycaster.set(rayOrigin, rayDirection)

      if (this.world.terrain) {
        const intersects = raycaster.intersectObjects(this.world.scene.children, true)
        for (const intersect of intersects) {
          this.player.position.set(intersect.point.x, intersect.point.y + 0.8, intersect.point.z)
        }
      }
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
