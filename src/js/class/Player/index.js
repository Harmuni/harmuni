import { AnimationMixer, LoadingManager, Quaternion, Vector3, Raycaster } from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
import PlayerAnimationsProxy from './PlayerAnimationsProxy/index'
import PlayerFSM from './PlayerFSM/index'
import ControllerInput from '../ControllerInput/index'

export default class Player {
  constructor ({ scene, terrain }) {
    this.scene = scene
    this.terrain = terrain

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

  checkCollision (pos) {
    pos.normalize()

    // const grid = this.GetComponent('SpatialGridController');
    // const nearby = grid.FindNearbyEntities(5).filter(e => _IsAlive(e));
    this.terrain.updateMatrixWorld()
    const nearby = this.terrain.children
    const collisions = []
    
    for (let i = 0; i < nearby.length; ++i) {
      const e = nearby[i]
      let worldPos = new Vector3
      e.updateMatrixWorld()
      e.getWorldPosition(worldPos)

      // console.log(e.name, e.position, worldPos)
      const d = ((pos.x - e.position.x) ** 2 + (pos.z - e.position.z) ** 2) ** 0.5;

      // HARDCODED
      // if (d <= 4) {
      //   collisions.push(nearby[i]);
      // }
    }
    return collisions
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
    
    const raycaster = new Raycaster()
    
    if (this.input.keys.forward) {
      velocity.z += acc.z * timeInSeconds
      
      const rayOrigin = new Vector3(
        this.target.position.x,
        this.target.position.y + 0.1,
        this.target.position.z
        )
        const rayDirection = new Vector3(0, -1, 0.1)
        rayDirection.normalize()
        raycaster.set(rayOrigin, rayDirection)
        
        if (this.terrain) {
          const intersects = raycaster.intersectObjects(this.terrain.children, true)
          for (const intersect of intersects) {
            this.target.position.y = intersect.point.y + 0.1
          }
          // const distance = (x1, y1, x2, y2) => {
          //   const xDist = x2 - x1
          //   const yDist = y2 - y1

          //   return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
          // }

          // let distanceToObj = distance(controlObject.position.x, controlObject.position.z, poteau.position.x, poteau.position.z)
          // if (distanceToObj <= 1.5) {
          //   console.log("jetouche")
          //   velocity.z = 0
          // }
      }

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

    const pos = this.target.position.clone();
    this.target.position.add(forward)
    this.target.position.add(sideways)

    const collisions = this.checkCollision(pos);
    // if (collisions.length > 0) {
    //   console.log(collisions)
    //   // return;
    // }

    this.position.copy(this.target.position)

    if (this.mixer) {
      this.mixer.update(timeInSeconds, this.terrain)
    }
  }
}
