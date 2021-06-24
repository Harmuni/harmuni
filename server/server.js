
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
    this.socket = socket; 
   
    console.log('socket USERS array :: ', USERS);

    for (let i = 0; i < USERS.length; ++i) {
      USERS[i].socket.emit('pos', this.pos); 
      this.socket.emit('pos', USERS[i].pos); 

    }
  }


}

io.on('connection', (socket) => {
//   console.log(`${socket.id} is connected`);
  USERS.push(new ConnectedUser(socket));
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(2002, () => {
  console.log('listening on *:2002');
});