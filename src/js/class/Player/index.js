import { AnimationMixer, LoadingManager, Quaternion, Vector3 } from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import PlayerAnimationProxy from './PlayerAnimationProxy/index'
import PlayerFSM from './PlayerFSM/index'
import ControllerInput from '../ControllerInput/index'

export default class Player {
  constructor (options) {
    this._options = options
    this._decceleration = new Vector3(-0.0005, -0.0001, -5.0)
    this._acceleration = new Vector3(1, 0.25, 50.0)
    this._velocity = new Vector3(0, 0, 0)
    this._position = new Vector3(0, 0, 0)
    this._animations = {}
    this._input = new ControllerInput()
    this._stateMachine = new PlayerFSM(new PlayerAnimationProxy(this._animations))
    this._loadModels({ meshScale: 0.02 })

    // const geometry = new BoxGeometry(1, 1, 1)
    // const material = new MeshPhongMaterial({ color: 'green' })
    // const player = new Mesh(geometry, material)
    // player.position.set(0, 0, 0)
    // options.scene.add(player)
    // this._controlPlayer({ player })
    return this._playerModel
  }

  _loadModels ({ meshScale = 1 }) {
    const loader = new FBXLoader()
    loader.load('/zombie/zombie.fbx', (fbx) => {
      fbx.scale.setScalar(meshScale)
      fbx.traverse(c => { c.castShadow = true })

      this._target = fbx
      this._playerModel = fbx.children
      this._options.scene.add(fbx)
      this._mixer = new AnimationMixer(fbx)
      this._manager = new LoadingManager()
      this._manager.onLoad = () => {
        this._stateMachine.setState('idle')
      }

      const _animationLoad = (animName, anim) => {
        const clip = anim.animations[0]
        const action = this._mixer.clipAction(clip)

        // Store the animation clip and animation action into a dictionary called this._animations
        this._animations[animName] = {
          clip: clip,
          action: action
        }
        console.log(this._animations)
      }

      const loader = new FBXLoader(this._manager)
      loader.load('/zombie/walk.fbx', (a) => {
        _animationLoad('walk', a)
      })
      loader.load('/zombie/run.fbx', (a) => {
        _animationLoad('run', a)
      })
      loader.load('/zombie/idle.fbx', (a) => {
        _animationLoad('idle', a)
      })
      loader.load('/zombie/dance.fbx', (a) => {
        _animationLoad('dance', a)
      })
    })
  }

  get playerModel () {
    return this._playerModel
  }

  set playerModel (value) {
    this._playerModel = value
    return this._playerModel
  }

  update (timeInSeconds) {
    if (!this._stateMachine._currentState) {
      return
    }

    this._stateMachine.update(timeInSeconds, this._input)

    const velocity = this._velocity
    const frameDecceleration = new Vector3(
      velocity.x * this._decceleration.x,
      velocity.y * this._decceleration.y,
      velocity.z * this._decceleration.z
    )
    frameDecceleration.multiplyScalar(timeInSeconds)
    frameDecceleration.z = Math.sign(frameDecceleration.z) * Math.min(
      Math.abs(frameDecceleration.z), Math.abs(velocity.z))

    velocity.add(frameDecceleration)

    const controlObject = this._target
    const _Q = new Quaternion()
    const _A = new Vector3()
    const _R = controlObject.quaternion.clone()

    const acc = this._acceleration.clone()
    if (this._input._keys.shift) {
      acc.multiplyScalar(2.0)
    }

    if (this._stateMachine._currentState.Name === 'dance') {
      acc.multiplyScalar(0.0)
    }

    if (this._input._keys.forward) {
      velocity.z += acc.z * timeInSeconds
    }
    if (this._input._keys.backward) {
      velocity.z -= acc.z * timeInSeconds
    }
    if (this._input._keys.left) {
      _A.set(0, 1, 0)
      _Q.setFromAxisAngle(_A, 4.0 * Math.PI * timeInSeconds * this._acceleration.y)
      _R.multiply(_Q)
    }
    if (this._input._keys.right) {
      _A.set(0, 1, 0)
      _Q.setFromAxisAngle(_A, 4.0 * -Math.PI * timeInSeconds * this._acceleration.y)
      _R.multiply(_Q)
    }

    controlObject.quaternion.copy(_R);

    const oldPosition = new Vector3()
    oldPosition.copy(controlObject.position)

    const forward = new Vector3(0, 0, 1)
    forward.applyQuaternion(controlObject.quaternion)
    forward.normalize()

    const sideways = new Vector3(1, 0, 0)
    sideways.applyQuaternion(controlObject.quaternion)
    sideways.normalize()

    sideways.multiplyScalar(velocity.x * timeInSeconds)
    forward.multiplyScalar(velocity.z * timeInSeconds)

    controlObject.position.add(forward)
    controlObject.position.add(sideways)

    this._position.copy(controlObject.position)

    if (this._mixer) {
      this._mixer.update(timeInSeconds)
    }
  }
}
