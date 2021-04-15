import * as THREE from 'three'
import Camera from './Camera/index'
import Player from './Player/index'
import World from './World/index'

export default class App {
  /**
   * Constructor of app
   */
  constructor (options) {
    // Initialisation
    this._world = {}
    this._camera = {}
    this._player = {}
    this._mixers = []
    this._sizes = {
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
    const renderer = this._setScene()

    // Instance world, camera and player
    this._world = new World()
    this._camera = new Camera({
      scene: this._world.scene,
      sizes: this._sizes,
      renderer
    })
    this._player = new Player({
      scene: this._world.scene
    })

    const raycaster = new THREE.Raycaster()
    const clock = new THREE.Clock()
    const render = () => {
      window.requestAnimationFrame(render)
      // TODO : supplant and implement delta time to avoid acceleration of time
      const elapsedTime = clock.getElapsedTime()
      const elapsedTimeSc = elapsedTime * 0.001

      // Update of instance
      this._mixers?.map(m => m.update(elapsedTimeSc))
      this._player?.update(elapsedTimeSc)
      this._camera.orbitControls?.update()
      // Implement third person camera
      // this._thirdPersonCamera = null
      // this._thirdPersonCamera?.update(elapsedTimeSc)

      renderer.render(this._world.scene, this._camera.camera)

      // Raycaster update mesh position
      const rayOrigin = new THREE.Vector3(
        this._player._position.x,
        this._player._position.y,
        this._player._position.z
      )
      const rayDirection = new THREE.Vector3(0, -1, 0)
      rayDirection.normalize()
      raycaster.set(rayOrigin, rayDirection)

      if (this._world.terrain) {
        const intersects = raycaster.intersectObjects(this._world.scene.children, true)
        for (const intersect of intersects) {
          this._player._position.set(intersect.point.x, intersect.point.y + 0.8, intersect.point.z)
        }
      }
    }
    return render
  }

  /**
   * Method to set scene with creation of canvas html and three renderer
   * @returns {object} renderer
   */
  _setScene () {
    const canvas = document.querySelector('#webgl')
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    })
    renderer.setSize(this._sizes.width, this._sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    return renderer
  }

}
