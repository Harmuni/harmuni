
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server, 
  {
    cors: {
      origin: "*"
    }
  }
);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

const USERS = []; 


class ConnectedUser {
  constructor(socket) {
    this.pos = [Math.random() * 20, 0, Math.random() * 20];
    this.socket = socket; 
    this.socket.emit('pos', this.pos)
    console.log(USERS);

    for (let i = 0; i < USERS.length; ++i) {
      USERS[i].socket.emit('pos', this.pos); 
      this.socket.emit('pos', USERS[i].pos); 

    }
    // this.socket.on('pos', (d) => {
    //   this.pos = [...d];
    //   this.spamEveryone();
    // });

  }

  spamEveryone() {
    this.socket.emit('pos', [this.id, this.pos]);

    // for (let i = 0; i < USERS.length; ++i) {
    //   USERS[i].socket.emit('pos', [USERS[i].id, USERS[i].character, USERS[i].pos]); 
    // }
  }
}

io.on('connection', (socket) => {
  console.log(`${socket.id} is connected`);
  USERS.push(new ConnectedUser(socket));
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(2002, () => {
  console.log('listening on *:2002');
});