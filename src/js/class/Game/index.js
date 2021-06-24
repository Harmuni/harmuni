import * as THREE from 'three'
import Camera from '../Camera/index'
import SquareEventArea from '../SquareEventArea'
import {
  Entity,
  EntityManager
} from '../EntityComponent/index'
import Pause from '../Pause'
import Player from '../Player/index'
import World from '../World/index'
import PlayerLocal from '../Player/PlayerLocal'
// import io from 'socket.io-client'

export default class Game {
  /**
   * @constructor of Game
   * @returns {void}
   */
  constructor({
    canvas
  }) {
    this.canvas = canvas
    this.renderer = {}
    this.camera = {}
    this.scene = {}
    this.sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    this.entityManager = {}

    /**
     * Multiplayer properties
     */
    this.player = {}
    this.remotePlayers = [];
    this.remoteColliders = []; // maybe not needed
    this.initialisingPlayers = [];
    this.remoteData = [];

    const game = this.launchGame()
    game !== 1 && console.error('Error rendering game')
  }

  /**
   * Launch the game, render app and refresh animations
   * @returns {void}
   */
  launchGame() {

    console.log('DANS LAUNCHGAME() :: this.remotePlayers vaut :: ', this.remotePlayers);
    console.log('DANS LAUNCHGAME() :: this.initialisingPlayers vaut :: ', this.initialisingPlayers);

    // Set render of app, default property of scene and default property of camera for threejs
    this.renderer = this.setRender()
    this.scene = this.setDefaultScene()
    this.camera = this.setDefaultCamera()

    // Instance entity manager with entity of game
    this.entityManager = new EntityManager()

    const worldEntity = new Entity()

    const localPlayerEntity = new Entity()

    for (let i = 0; i < 2; i++) {
        this.remotePlayers.push(new Entity())
    }
    const cameraEntity = new Entity()
    const pauseEntity = new Entity()
    const eventAreaEntity = new Entity()

    worldEntity.addComponent(new World({
      renderer: this.renderer,
      scene: this.scene
    }))


    this.remoteData.forEach(function (data) {
			if (game.player.id != data.id) {
				//Is this player being initialised?
				let localPlayer;
				game.initialisingPlayers.forEach(function (player) {
					if (player.id == data.id) localPlayer = player;
				});
				//If not being initialised check the remotePlayers array
				if (localPlayer === undefined) {
					let remotePlayer;
					game.remotePlayers.forEach(function (player) {
						if (player.id == data.id) remotePlayer = player;
					});
					if (remotePlayer === undefined) {
						//Initialise player
						game.initialisingPlayers.push(new Player(game, data));
					} else {
						//Player exists
						remotePlayers.push(remotePlayer);
						remoteColliders.push(remotePlayer.collider);
					}
				}
			}
		});


    localPlayerEntity.addComponent(new PlayerLocal({
      scene: this.scene,
      terrain: worldEntity.components.World.terrain,
      game: this
    }))


    localPlayerEntity.components.PlayerLocal.initSocket()
    localPlayerEntity.id = localPlayerEntity.getComponent('PlayerLocal').getId()

    this.remotePlayers.forEach((remotePlayer) => {
      remotePlayer.addComponent(new PlayerLocal({
        scene: this.scene,
        terrain: worldEntity.components.World.terrain,
        game: this
      }))
  
    })
    cameraEntity.addComponent(new Camera({
      scene: this.scene,

      // Store the animation clip and animation action into a dictionary called this.an
      sizes: this.sizes,
      renderer: this.renderer,
      targetToFollow: localPlayerEntity,
      typeOfCamera: 'thirdPersonView'
    }))
    pauseEntity.addComponent(new Pause())
    eventAreaEntity.addComponent(new SquareEventArea({
      targetToEmit: localPlayerEntity,
      action: () => {
        console.log('HOLA BUENOS DIAS AMIGO')
      },
      area: {
        A: {
          x: 4,
          z: 8
        },
        B: {
          x: 8,
          z: 8
        },
        C: {
          x: 4,
          z: 4
        },
        D: {
          x: 8,
          z: 4
        }
      }
    }))

    this.entityManager.add(worldEntity, 'worldEntity')
    this.entityManager.add(localPlayerEntity, 'localPlayerEntity') // TODO : renommer en playerlocal / identifier clairement le local player 

    this.remotePlayers.forEach((remotePlayer) => {
      this.entityManager.add(remotePlayer)
      console.log('remotePlayer vaut :: ', remotePlayer);
    })

    this.entityManager.add(cameraEntity, 'cameraEntity')
    this.entityManager.add(pauseEntity, 'pauseEntity')
    this.entityManager.add(eventAreaEntity, 'eventAreaEntity')

    // raccourci/ref vers l'entité player dans le manager
    this.player = this.entityManager.get('localPlayerEntity')


    console.log(worldEntity)
    console.log(localPlayerEntity)
    console.log(cameraEntity)
    console.log(pauseEntity)
    console.log(eventAreaEntity)

    // Affect alias for new camera entity
    this.camera = cameraEntity.components.Camera.threeCamera

    // Clock use to get second and Three clock use perfomance.now and date.now
    const gameLoop = this.gameLoop({
      clock: new THREE.Clock()
    })
    return gameLoop
  }

  /**
   * TODO : refactor & comment DRAFT
   * Accesseur pour obtenir un joueur remote d'après son id 
   * @param {any} id 
   * @returns {Object} // Player
   */

  getRemotePlayerById(id) {
    console.log('DANS getRemotePlayerById() :: this.remotePlayers vaut :: ', this.remotePlayers);
    console.log('DANS LAUNCHGAME() :: this.initialisingPlayers vaut :: ', this.initialisingPlayers);
    if (this.remotePlayers === undefined || this.remotePlayers.length == 0) return;

    const players = this.remotePlayers.filter(function (player) {
      if (player.id == id) return true;
    });

    if (players.length == 0) return;

    return players[0];
  }

  /**
   * TODO : refactor & comment DRAFT
   * Méthode permettant de mettre à jour la liste des joueurs côté serveur 
   * @param {number} dt 
   * @returns {void}
   */
  updateRemotePlayers(dt) {
    if (this.remoteData === undefined || this.remoteData.length == 0 || this.player === undefined || this.player.id === undefined) return;

    const newPlayers = [];
    const game = this;
    //Get all remotePlayers from remoteData array
    const remotePlayers = [];
    // const remoteColliders = [];

    this.remoteData.forEach(function (data) {

      if (game.player.id != data.id) {
        //Is this player being initialised?
        let localPlayer;
        game.initialisingPlayers.forEach(function (player) {

          if (player.id == data.id) localPlayer = player;

        });

        //If not being initialised check the remotePlayers array
        if (localPlayer === undefined) {
          let remotePlayer;
          game.remotePlayers.forEach(function (player) {
            if (player.id == data.id) rplayer = player;
          });
          if (rplayer === undefined) {
            //Initialise player
            game.initialisingPlayers.push(new Player(game, data));
          } else {
            //Player exists
            remotePlayers.push(rplayer);
            // remoteColliders.push(rplayer.collider);
          }
        }
      }
    });

    // this.scene.children.forEach(function (object) {
    //   if (object.userData.remotePlayer && game.getRemotePlayerById(object.userData.id) == undefined) {
    //     game.scene.remove(object);
    //   }
    // });

    console.log('remotePlayers :: ', remotePlayers);
    this.remotePlayers = remotePlayers;
    // this.remoteColliders = remoteColliders;
    this.remotePlayers.forEach(function (player) {
      player.update(dt);
    });
  }

  /**
   * Method to set render, create canvas html and three renderer
   * @returns {Object} renderer
   */
  setRender() {
    const canvas = document.getElementById('webgl')
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true
    })
    renderer.setSize(this.sizes.width, this.sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    return renderer
  }

  setDefaultCamera() {
    const fov = 60
    const aspect = 1920 / 1080
    const near = 1.0
    const far = 1000.0
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(75, 20, 0)
    camera.lookAt(0, 20, 0)
    return camera
  }

  setDefaultScene() {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xFFFFFF)
    scene.fog = new THREE.FogExp2(0x89b2eb, 0.002)
    return scene
  }

  gameLoop({
    clock
  }) {

    const game = this
    console.log('enter game loop');
    // Render and refresh animation
    const deltaTime = clock.getDelta()

    return window.requestAnimationFrame((t) => {
      this.gameLoop({
        clock
      })
      this.renderer ?.render(this.scene, this.camera)
      this.step({
        deltaTime
      })
    })
  }

  step({
    deltaTime
  }) {
    // Update of entities
    this.entityManager.update(deltaTime)
  }
}