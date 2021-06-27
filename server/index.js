const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Adding socket.io
const server = require('http').Server(app)
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname })
})

app.get('/json', function (req, res) {
  res.status(200).json({
    data: {
      1: 'je suis la premiere data'
    }
  })
})

// Original game data
const gameData = { players: {} }

let interval
io.on('connection', (socket) => {
  console.log(`Client ${socket.id} connected`)
  // Instantiate player client
  gameData.players[socket.id] = {
    id: socket.id,
    position: { x: 0, y: 0, z: 0 }
  }
  console.log('Every players connected in room :', gameData.players)

  socket.emit('serverState', 'Getting data from server works beautifully')
  socket.emit('gameData', gameData)

  // Send to all clients server data
  io.sockets.emit('broadcast', {
    info: Object.keys(gameData.players).length + ' clients connected!',
    newClient: socket.id,
    gameData
  })

  // Anchor for update player position in game data
  socket.on('updatePlayerPosition', ({ playerId, position }) => {
    // console.log('player id', playerId)
    // console.log('pos', position)
    if (playerId && position) {
      gameData.players[playerId].position = position
      console.log('MAJ', gameData.players)
    }
  })

  if (interval) clearInterval(interval)
  interval = setInterval(() => getApiAndEmit(socket), 1000)

  socket.on('disconnect', () => {
    const isLeaving = delete gameData.players[socket.id]
    console.assert(isLeaving, 'deletion of players failed')
    isLeaving
      ? console.log(`Client ${socket.id} disconnected there remains:`, gameData.players)
      : console.error(`Client ${socket.id} failed to disconnect`)
    clearInterval(interval)
  })
})

const getApiAndEmit = socket => {
  const response = new Date()
  // Emitting a new message. Will be consumed by the client
  socket.emit('FromAPI', response)
}

server.listen(3000, function () {
  console.log('Votre app est disponible sur localhost:3000 !')
})
