import { Component, Entity } from '../EntityComponent'
import Player from '../Player'

export default class Multiplayer extends Component {
  constructor ({ socket, scene, terrain, entityManager }) {
    super()
    this.socket = socket
    this.scene = scene
    this.terrain = terrain
    this.entityManager = entityManager
    this.players = {}

    this.socket.on('gameData', (gameData) => {
      this.players = gameData.players
    })
    console.log(this.players)
  }

  update (timeInSeconds) {
    if (this.socket) {
      const onlinePlayerEntity = new Entity()
      this.socket.on('broadcast', (server) => {
        console.log(server.info)
        // console.log(server.gameData)
        // console.log(`${Object.keys(server.gameData.players).length} vs ${Object.keys(this.players).length}`)

        if (Object.keys(server.gameData.players).length > Object.keys(this.players).length) {
          // Add new players
          Object.keys(server.gameData.players).map((serverPlayer, index) => {
            // console.log('Player of server', server.gameData.players[serverPlayer])

            Object.keys(this.players).map((localPlayer, index) => {
              if (this.players[localPlayer] === this.players[serverPlayer]) {
                return true
              } else {
                // this.players.push(server.gameData.players[serverPlayer])
                this.players = server.gameData.players

                return true
              }
            })

            let isLocal
            this.socket.id === server.gameData.players[serverPlayer].id
              ? isLocal = true
              : isLocal = false

            if (!isLocal) {
              const myPlayer = new Player({
                scene: this.scene,
                terrain: this.terrain,
                isLocal: false,
                socket: this.socket,
                id: this.players[serverPlayer]
              })
              onlinePlayerEntity.addComponent(myPlayer)

              this.entityManager.add(onlinePlayerEntity, `onlinePlayerEntity${index}`)
            }
            return true
          })
        }
      })
    }
  }
}
