import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera {
  constructor (options) {
    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      options.sizes.width / options.sizes.height,
      0.1,
      1000
    )
    camera.position.set(0, 0, 3)
    options.scene.add(camera)

    // Orbit Controls
    const orbitControls = new OrbitControls(camera, options.renderer.domElement)
    orbitControls.enableDamping = true

    // Handle window resizing
    window.addEventListener('resize', () => {
      // Update dimensions
      options.sizes.width = window.innerWidth
      options.sizes.height = window.innerHeight

      // Update camera
      camera.aspect = options.sizes.width / options.sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      options.renderer.setSize(options.sizes.width, options.sizes.height)
      options.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
    return { camera, orbitControls }
  }
}
