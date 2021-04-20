import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera {
  constructor ({ scene, sizes, renderer, player, typeOfCamera }) {
    this.scene = scene
    this.sizes = sizes
    this.renderer = renderer
    this.targetToFollow = player
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
  }

  update (timeElapsed) {
    const idealOffset = this.calculateIdealOffset()
    const idealLookat = this.calculateIdealLookat()

    const t = 1.0 - Math.pow(0.001, timeElapsed)

    this.currentPosition.lerp(idealOffset, t)
    this.currentLookat.lerp(idealLookat, t)

    this.threeCamera.position.copy(this.currentPosition)
    this.threeCamera.lookAt(this.currentLookat)
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
    this.scene.add(this.camcameraModelera)

    // Orbit Controls
    this.orbitControls = new OrbitControls(this.threeCamera, this.renderer.domElement)
    this.orbitControls.enableDamping = true

    this.windowResizing()
  }

  generateThirdPersonCamera () {
    this.fov = 60
    this.aspect = this.sizes.width / this.sizes.height
    this.near = 1.0
    this.far = 1000.0
    this.threeCamera = new THREE.PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    )
    this.threeCamera.position.set(25, 10, 25)
    this.scene.add(this.threeCamera)

    this.currentPosition = new THREE.Vector3()
    this.currentLookat = new THREE.Vector3()

    this.windowResizing()
  }

  calculateIdealOffset () {
    const idealOffset = new THREE.Vector3(0, 20, -35)
    idealOffset.applyQuaternion(this.targetToFollow.getRotation())
    idealOffset.add(this.targetToFollow.getPosition())
    return idealOffset
  }

  calculateIdealLookat () {
    const idealLookat = new THREE.Vector3(0, 10, 50)
    idealLookat.applyQuaternion(this.targetToFollow.getRotation())
    idealLookat.add(this.targetToFollow.getPosition())
    return idealLookat
  }

  windowResizing () {
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
