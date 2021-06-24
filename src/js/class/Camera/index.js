import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Component } from '../EntityComponent'

export default class Camera extends Component {
  constructor ({ scene, sizes, renderer, targetToFollow, typeOfCamera }) {
    super()
    this.scene = scene
    this.sizes = sizes
    this.renderer = renderer
    this.targetToFollow = targetToFollow
    this.typeOfCamera = typeOfCamera

    this.threeCamera = {}
    this.orbitControls = {}
    this.currentPosition = {}
    this.currentLookat = {}
    this.fov = {}
    this.aspect = {}
    this.near = {}
    this.far = {}
    this.selectCamera()
    this.onWindowResize()
  }

  update (timeElapsed) {
    if (this.typeOfCamera === 'thirdPersonView') {
      const idealOffset = this.calculateIdealOffset()
      const idealLookat = this.calculateIdealLookat()

      const t = 1.0 - Math.pow(0.001, timeElapsed)

      this.currentPosition.lerp(idealOffset, t)
      this.currentLookat.lerp(idealLookat, t)

      this.threeCamera.position.copy(this.currentPosition)
      this.threeCamera.lookAt(this.currentLookat)
    }
  }

  selectCamera () {
    switch (this.typeOfCamera) {
      case 'freeView':
        this.setTypeOfCamera({ newValue: 'freeView' })
        this.generateFreeCamera()
        break
      case 'thirdPersonView':
        this.setTypeOfCamera({ newValue: 'thirdPersonView' })
        this.generateThirdPersonCamera()
        break
      default:
        this.generateFreeCamera()
        break
    }
  }

  generateFreeCamera () {
    // Camera
    this.fov = 75
    this.aspect = this.sizes.width / this.sizes.height
    this.near = 0.1
    this.far = 1000.0
    this.threeCamera = new THREE.PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    )
    this.threeCamera.position.set(0, 0, 3)
    this.scene.add(this.threeCamera)

    // Orbit Controls
    this.orbitControls = new OrbitControls(this.threeCamera, this.renderer.domElement)
    this.orbitControls.enableDamping = true
  }

  generateThirdPersonCamera () {
    this.fov = 40
    this.aspect = this.sizes.width / this.sizes.height
    this.near = 1.0
    this.far = 100.0
    this.threeCamera = new THREE.PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    )
    this.threeCamera.position.set(50, 10, 50)
    this.scene.add(this.threeCamera)
    // Position Controls
    this.currentPosition = new THREE.Vector3()
    this.currentLookat = new THREE.Vector3()
  }

  calculateIdealOffset () {
    const idealOffset = new THREE.Vector3(0, 0.6, -1.75)
    idealOffset.applyQuaternion(this.targetToFollow.rotation)
    idealOffset.add(this.targetToFollow.position)
    return idealOffset
  }

  calculateIdealLookat () {
    const idealLookat = new THREE.Vector3(0, 0.05, 50)
    idealLookat.applyQuaternion(this.targetToFollow.rotation)
    idealLookat.add(this.targetToFollow.position)
    return idealLookat
  }

  onWindowResize () {
    // Handle window resizing
    window.addEventListener('resize', () => {
      // Update dimensions
      this.sizes.width = window.innerWidth
      this.sizes.height = window.innerHeight

      // Update camera
      this.threeCamera.aspect = this.sizes.width / this.sizes.height
      this.threeCamera.updateProjectionMatrix()

      // Update renderer
      this.renderer.setSize(this.sizes.width, this.sizes.height)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })
  }

  getTypeOfCamera () {
    return this.typeOfCamera
  }

  setTypeOfCamera ({ newValue }) {
    this.typeOfCamera = newValue
    return this.typeOfCamera
  }
}
