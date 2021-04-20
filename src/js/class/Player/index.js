import { AnimationMixer, LoadingManager, Quaternion, Vector3 } from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import PlayerAnimationsProxy from './PlayerAnimationsProxy/index'
import PlayerFSM from './PlayerFSM/index'
import ControllerInput from '../ControllerInput/index'

export default class Player {
  constructor ({ scene }) {
    this.scene = scene

    this.acceleration = new Vector3(1, 0.25, 50.0)
    this.animations = {}
    this.decceleration = new Vector3(-0.0005, -0.0001, -5.0)
    this.input = new ControllerInput()
    this.manager = {}
    this.mixer = {}
    this.position = new Vector3(0, 0, 0)
    this.rotation = new Quaternion(0, 0, 0, 0)
    this.stateMachine = new PlayerFSM({ proxy: new PlayerAnimationsProxy({ animations: this.animations }) })
    this.target = null
    this.velocity = new Vector3(0, 0, 0)
    this.loadModels({ meshScale: 0.1 })
  }

  loadModels ({ meshScale = 1 }) {
    const loader = new FBXLoader()
    loader.load('/zombie/zombie.fbx', (fbx) => {
      fbx.scale.setScalar(meshScale)
      fbx.traverse(c => { c.castShadow = true })

      this.target = fbx
      this.scene.add(fbx)
      this.mixer = new AnimationMixer(fbx)
      this.manager = new LoadingManager()
      this.manager.onLoad = () => {
        this.stateMachine.setState('idle')
      }

      const animationLoad = ({ animationName, fbxAnimation }) => {
        const clip = fbxAnimation.animations[0]
        const action = this.mixer.clipAction(clip)

        // Store the animation clip and animation action into a dictionary called this.animations
        this.animations[animationName] = {
          clip: clip,
          action: action
        }
      }

      const loader = new FBXLoader(this.manager)
      loader.load('/zombie/walk.fbx', (fbxAnimation) => {
        animationLoad({ animationName: 'walk', fbxAnimation })
      })
      loader.load('/zombie/run.fbx', (fbxAnimation) => {
        animationLoad({ animationName: 'run', fbxAnimation })
      })
      loader.load('/zombie/idle.fbx', (fbxAnimation) => {
        animationLoad({ animationName: 'idle', fbxAnimation })
      })
      loader.load('/zombie/dance.fbx', (fbxAnimation) => {
        animationLoad({animationName: 'dance', fbxAnimation })
      })
    })
  }

  getPosition () {
    return this.position
  }

  getRotation () {
    if (!this.target) {
      return new Quaternion()
    }
    return this.target.quaternion
  }

  update (timeInSeconds) {
    if (!this.stateMachine.currentState) {
      return
    }

    this.stateMachine.update({ timeElapsed: timeInSeconds, input: this.input })

    const velocity = this.velocity
    const frameDecceleration = new Vector3(
      velocity.x * this.decceleration.x,
      velocity.y * this.decceleration.y,
      velocity.z * this.decceleration.z
    )
    frameDecceleration.multiplyScalar(timeInSeconds)
    frameDecceleration.z = Math.sign(frameDecceleration.z) * Math.min(
      Math.abs(frameDecceleration.z), Math.abs(velocity.z))

    velocity.add(frameDecceleration)

    const _Q = new Quaternion()
    const _A = new Vector3()
    const _R = this.target.quaternion.clone()

    const acc = this.acceleration.clone()
    if (this.input.keys.shift) {
      acc.multiplyScalar(2.0)
    }

    if (this.stateMachine.currentState.Name === 'dance') {
      acc.multiplyScalar(0.0)
    }

    if (this.input.keys.forward) {
      velocity.z += acc.z * timeInSeconds
    }
    if (this.input.keys.backward) {
      velocity.z -= acc.z * timeInSeconds
    }
    if (this.input.keys.left) {
      _A.set(0, 1, 0)
      _Q.setFromAxisAngle(_A, 4.0 * Math.PI * timeInSeconds * this.acceleration.y)
      _R.multiply(_Q)
    }
    if (this.input.keys.right) {
      _A.set(0, 1, 0)
      _Q.setFromAxisAngle(_A, 4.0 * -Math.PI * timeInSeconds * this.acceleration.y)
      _R.multiply(_Q)
    }

    this.target.quaternion.copy(_R)

    const oldPosition = new Vector3()
    oldPosition.copy(this.target.position)

    const forward = new Vector3(0, 0, 1)
    forward.applyQuaternion(this.target.quaternion)
    forward.normalize()

    const sideways = new Vector3(1, 0, 0)
    sideways.applyQuaternion(this.target.quaternion)
    sideways.normalize()

    sideways.multiplyScalar(velocity.x * timeInSeconds)
    forward.multiplyScalar(velocity.z * timeInSeconds)

    this.target.position.add(forward)
    this.target.position.add(sideways)

    this.position.copy(this.target.position)

    if (this.mixer) {
      this.mixer.update(timeInSeconds)
    }
  }
}
