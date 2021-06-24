import {
  AnimationMixer,
  LoadingManager,
  Quaternion,
  sRGBEncoding,
  Vector3,
  Raycaster
} from 'three'
import {
  FBXLoader
} from 'three/examples/jsm/loaders/FBXLoader.js'
import PlayerAnimationsProxy from './PlayerAnimationsProxy/index'
import PlayerFSM from './PlayerFSM/index'
import ControllerInput from '../ControllerInput/index'
import {
  Component
} from '../EntityComponent/index'
import {
  LumaCharacter,
  LumaIdle,
  LumaRun,
  LumaWalk
} from '../../../assets/meshes'
import io from 'socket.io-client'

export default class Player extends Component {
  constructor({
    scene,
    terrain,
    options,
    game
  }) {
    super()
    this.scene = scene
    this.terrain = terrain

    this.acceleration = new Vector3(1, 0.25, 50.0)
    this.animations = {}
    this.decceleration = new Vector3(-0.0005, -0.0001, -5.0)
    this.input = new ControllerInput()
    this.manager = {}
    this.mixer = {}
    this.position = new Vector3(0, 0, 0)
    this.stateMachine = new PlayerFSM({
      proxy: new PlayerAnimationsProxy({
        animations: this.animations
      })
    })
    this.target = null
    this.velocity = new Vector3(0, 0, 0)
    this.bones = {}
    this.local = true
    this.model = LumaCharacter
    this.id
    this.socket


    //! Refactor :: Juste un if local true/false
    if (options === undefined) {
      console.log('player local');
    } else if (typeof options == 'object') {
      this.local = false
      this.options = options
      this.id = options.id
      this.model = options.model //'Viking'
    }

    const player = this

    if (this.local) {
      this.loadModels({
        meshScale: 0.03
      })
      if (player.initSocket !== undefined) player.initSocket()
    } else {
      player.object.userData.id = player.id
      player.object.userData.remotePlayer = true
      const players = game.initialisingPlayers.splice(game.initialisingPlayers.indexOf(this), 1)
      game.remotePlayers.push(players[0])
    }

    /**
     * domaine que doit écouter le socket : 
     */
    this.socket = io.connect('http://localhost:2002')

    // setId s'applique quand le socket est crée coté serveur, et renvoi l'ID au client
    this.socket.on('setId', function (data) {
      console.log('socket triggered');
      player.id = data.id
      console.log('this.id vaut', this.id);
      console.log('player.id vaut', player.id);
    })

    this.socket.on('remoteData', function (data) {
      game.remoteData = data
      console.log('game.remoteData vaut', game.remoteData);
    })
    /**
     * La premiere chose que l'on fait est de trouver l'ID qui nous ai renvoyé par le serveur dans le tableau "remotePlayers" qui liste les joueurs que connait le serveur
     */

    // todo: vérifier que cette socket action soit OK 
    this.socket.on('deletePlayer', function (data) {
      const players = game.remotePlayers.filter(player => {
        if (player.id == data.id) {
          return player
        }
      })
      if (players.length > 0) {
        let index = game.remotePlayers.indexOf(players[0])
        if (index != 1) {
          game.remotePlayers.splice(index, 1)
          game.scene.remove(players[0].object)
        }
      } else {
        let index = game.initialisingPlayers.indexOf(players[0])
        if (index != -1) {
          const player = game.initialisingPlayers[index]
          player.deleted = true
          game.initialisingPlayers.splice(index, 1)

        }
      }
    })

    // this.socket = socket

  }

  // initSocket() {
  //   console.log('entre dans initSocket(), this socket vaut :: ', this.socket);
  //   this.socket.emit('init', {
  //     pos: {
  //       x: this.position.x,
  //       y: this.position.y,
  //       z: this.position.z,
  //     }
  //   })

  // //broadcast
  // }

  // updateSocket() {
  //   if (this.socket !== undefined) {
  //     this.socket.emit('update', {
  //       pos: {
  //         x: this.position.x,
  //         y: this.position.y,
  //         z: this.position.z,
  //       }
  //     })
  //   }
  // }

  loadModels({
    meshScale = 1
  }) {


    const loader = new FBXLoader()
    loader.load(this.model, (fbx) => {
      console.log('fbx test', fbx)
      this.target = fbx

      this.target.scale.setScalar(meshScale)
      this.scene.add(this.target)

      for (const b of this.target.children[1].skeleton.bones) {
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

      const animationLoad = ({
        animationName,
        fbxAnimation
      }) => {
        const clip = fbxAnimation.animations[0]
        const action = this.mixer.clipAction(clip)

        // Store the animation clip and animation action into a dictionary called this.animations
        this.animations[animationName] = {
          clip: clip,
          action: action
        }
      }

      const loader = new FBXLoader(this.manager)
      loader.load(LumaWalk, (fbxAnimation) => {
        animationLoad({
          animationName: 'walk',
          fbxAnimation
        })
      })
      loader.load(LumaRun, (fbxAnimation) => {
        animationLoad({
          animationName: 'run',
          fbxAnimation
        })
      })
      loader.load(LumaIdle, (fbxAnimation) => {
        animationLoad({
          animationName: 'idle',
          fbxAnimation
        })
      })
    })
  }

  update(timeInSeconds) {
    if (!this.stateMachine.currentState) {
      return
    }

    // const input = this.getComponent('controllerInput')
    this.stateMachine.update({
      timeElapsed: timeInSeconds,
      input: this.input
    })

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

    const raycaster = new Raycaster()
    if (this.input.keys.forward) {
      velocity.z += acc.z * timeInSeconds
      // Passer userData (coté serveur) pos.x/y/z pour remplacer target
      const rayOrigin = new Vector3(
        this.socket.userData.pos.x,
        this.socket.userData.pos.y + 0.1,
        this.socket.userData.pos.z
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
    this.updateSocket();

  }
}