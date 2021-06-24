import { AnimationMixer, LoadingManager, Quaternion, sRGBEncoding, Vector3, Raycaster } from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import PlayerAnimationsProxy from './PlayerAnimationsProxy/index'
import PlayerFSM from './PlayerFSM/index'
import ControllerInput from '../ControllerInput/index'
import { Component } from '../EntityComponent/index'
import { LumaCharacter, LumaIdle, LumaRun, LumaWalk, SkaljordCharacter, SkaljordIdle, SkaljordMusic, SkaljordRun, SkaljordWalk } from '../../../assets/meshes'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default class Player extends Component {
  constructor ({ scene, terrain }) {
    super()
    this.scene = scene
    this.terrain = terrain

    this.acceleration = new Vector3(1, 0.25, 5.0)
    this.animations = {}
    this.decceleration = new Vector3(-0.0005, -0.0001, -5.0)
    this.input = new ControllerInput()
    this.manager = {}
    this.mixer = {}
    this.position = new Vector3(0, 0, 0)
    this.stateMachine = new PlayerFSM({ proxy: new PlayerAnimationsProxy({ animations: this.animations }) })
    this.target = null
    this.velocity = new Vector3(0, 0, 0)
    this.bones = {}

    const fbxLoader = new FBXLoader()
    this.loadModels({ fbxLoader, scaleRatio: 0.007 })
  }

  loadModels ({ fbxLoader, scaleRatio = 1 }) {
    fbxLoader.load(
      SkaljordCharacter,
      (fbx) => {
        console.log('fbx test', fbx)
        this.target = fbx
        this.target.scale.setScalar(scaleRatio)
        this.scene.add(this.target)

        for (const b of this.target.children[0].skeleton.bones) {
          this.bones[b.name] = b
        }

        this.target.traverse(c => {
          c.castShadow = true
          c.receiveShadow = true
          if (c.material && c.material.map) {
            c.material.map.encoding = sRGBEncoding
          }
        })

        this.broadcast({
          topic: 'load.character',
          model: this.target,
          bones: this.bones
        })

        this.mixer = new AnimationMixer(this.target)
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
        loader.load(SkaljordWalk, (fbxAnimation) => {
          console.log('fbx walk', fbxAnimation)
          animationLoad({ animationName: 'walk', fbxAnimation })
        })
        loader.load(SkaljordRun, (fbxAnimation) => {
          animationLoad({ animationName: 'run', fbxAnimation })
        })
        loader.load(SkaljordIdle, (fbxAnimation) => {
          animationLoad({ animationName: 'idle', fbxAnimation })
        })
        loader.load(SkaljordMusic, (fbxAnimation) => {
          console.log('fbx music', fbxAnimation)
          animationLoad({ animationName: 'playMusic', fbxAnimation })
        })
        // const loaderOfSolution = new GLTFLoader(this.manager)
        // loaderOfSolution.load(SkaljordMusic, (gltf) => {
        //   console.log('glb music', gltf)
        //   animationLoad({ animationName: 'playMusic', gltf })
        // })
      }
    )
  }

  update (timeInSeconds) {
    if (!this.stateMachine.currentState) {
      return
    }

    // const input = this.getComponent('controllerInput')
    this.stateMachine.update({ timeElapsed: timeInSeconds, input: this.input })

    if (this.mixer) {
      this.mixer.update(timeInSeconds)
    }

    // HARDCODED
    if (this.stateMachine.currentState.action) {
      this.Broadcast({
        topic: 'player.action',
        action: this.stateMachine.currentState.name,
        time: this.stateMachine.currentState.action.time
      })
    }

    const currentState = this.stateMachine.currentState
    if (currentState.name !== 'walk' &&
        currentState.name !== 'run' &&
        currentState.name !== 'idle') {
      return
    }

    const velocity = this.velocity
    const frameDecceleration = new Vector3(
      velocity.x * this.decceleration.x,
      velocity.y * this.decceleration.y,
      velocity.z * this.decceleration.z
    )
    frameDecceleration.multiplyScalar(timeInSeconds)
    frameDecceleration.z = Math.sign(frameDecceleration.z) * Math.min(
      Math.abs(frameDecceleration.z), Math.abs(velocity.z)
    )
    velocity.add(frameDecceleration)

    const controlObject = this.target
    const Q = new Quaternion()
    const A = new Vector3()
    const R = controlObject.quaternion.clone()

    const acc = this.acceleration.clone()
    if (this.input.keys.shift) {
      acc.multiplyScalar(2.0)
    }

    if (this.input.keys.forward) {
      velocity.z += acc.z * timeInSeconds
    }

    if (this.input.keys.backward) {
      velocity.z -= acc.z * timeInSeconds
    }
    if (this.input.keys.left) {
      A.set(0, 1, 0)
      Q.setFromAxisAngle(A, 4.0 * Math.PI * timeInSeconds * this.acceleration.y)
      R.multiply(Q)
    }
    if (this.input.keys.right) {
      A.set(0, 1, 0)
      Q.setFromAxisAngle(A, 4.0 * -Math.PI * timeInSeconds * this.acceleration.y)
      R.multiply(Q)
    }

    controlObject.quaternion.copy(R)

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

    const pos = controlObject.position.clone()
    pos.add(forward)
    pos.add(sideways)

    controlObject.position.copy(pos)
    this.position.copy(pos)

    this.parent.setPosition(this.position)
    this.parent.setQuaternion(this.target.quaternion)
  }
}
