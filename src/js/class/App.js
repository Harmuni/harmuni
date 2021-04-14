import * as THREE from 'three'
import Camera from './Camera/index'
import Player from './Player/index'
import World from './World/index'

export default class App {
  constructor (options) {
    const app = this.renderApp()
    window.requestAnimationFrame(app)
  }

  // Render & Animation
  renderApp () {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    const renderer = this.setScene({ sizes })
    const world = new World()
    const scene = world.scene
    const terrain = world.terrain

    const camera = new Camera({ scene, sizes, renderer })
    const myCamera = camera.camera
    const orbitControls = camera.orbitControls

    const player = new Player({ scene })
    console.log('test', player)

    const raycaster = new THREE.Raycaster()
    const clock = new THREE.Clock()
    const render = () => {
      window.requestAnimationFrame(render)
      const elapsedTime = clock.getElapsedTime()

      // Raycaster mesh position
      const rayOrigin = new THREE.Vector3(player._position.x, player._position.y, player._position.z)
      const rayDirection = new THREE.Vector3(0, -1, 0)
      rayDirection.normalize()
      raycaster.set(rayOrigin, rayDirection)

      if (terrain) {
        const intersects = raycaster.intersectObjects(scene.children, true)
        for (const intersect of intersects) {
          player._position.set(intersect.point.x, intersect.point.y + 0.8, intersect.point.z)
        }
      }

      orbitControls.update()
      renderer.render(scene, myCamera)
    }
    return render
  }

  setScene ({ sizes }) {
    // Canvas & Renderer
    const canvas = document.querySelector('#webgl')
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    })
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    return renderer
  }
}
