const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// app.use(express.static('../../public_html/blockland/'));
// app.use(express.static('../../public_html/libs'));
// app.use(express.static('../../public_html/blockland/v3'));
// app.get('/',function(req, res) {
//     res.sendFile(__dirname + '../../public_html/blockland/v3/index.html');
// });

/**
 * Dès que l'on à une connexion socket, on définit un ensemble de valeurs personnalisée/custom qu'on nomme userData ...
 */
io.sockets.on('connection', function(socket){
	socket.userData = { x:0, y:0, z:0, heading:0 }; // ... avec des valeurs par défaut
 
	console.log(`${socket.id} connected`);
	socket.emit('setId', { id: socket.id }); // on emet l'ID du socket côté client 
	
    socket.on('disconnect', function(){
		socket.broadcast.emit('deletePlayer', { id: socket.id }); // Quand on se déconnecte, le serveur "broadcast" (envoi à TOUS les clients) l'ID du joueur supprimé
    });	
	
	/**
	 * Quand l'événement init est appelé par le client
	 */
	socket.on('init', function(data){
		// on initialise nos valeurs 
		console.log(`socket.init ${data.model}`);
		socket.userData.model = data.model;
		socket.userData.colour = data.colour;
		socket.userData.x = data.x;
		socket.userData.y = data.y;
		socket.userData.z = data.z;
		socket.userData.heading = data.h;
		socket.userData.pb = data.pb, // pitch and bank (TODO / à préciser)
		socket.userData.action = "Idle";
	});
	
	// L'évenement "update" est appellé par la fonction update() (RAF / draw) coté client (60x par secondes) 
	socket.on('update', function(data){
		socket.userData.x = data.x;
		socket.userData.y = data.y;
		socket.userData.z = data.z;
		socket.userData.heading = data.h;
		socket.userData.pb = data.pb,
		socket.userData.action = data.action;
	});
	
	// socket.on('chat message', function(data){
	// 	console.log(`chat message:${data.id} ${data.message}`);
	// 	io.to(data.id).emit('chat message', { id: socket.id, message: data.message });
	// })
});

http.listen(2002, function(){
  console.log('listening on *:2002');
});

setInterval(function(){
	const nsp = io.of('/'); // nsp = namespace https://socket.io/docs/v3/namespaces/#Main-namespace
    let pack = [];
	
    for(let id in io.sockets.sockets){
        const socket = nsp.connected[id];
		//Only push sockets that have been initialised
		if (socket.userData.model!==undefined){
			pack.push({
				id: socket.id,
				model: socket.userData.model,
				colour: socket.userData.colour,
				x: socket.userData.x,
				y: socket.userData.y,
				z: socket.userData.z,
				heading: socket.userData.heading,
				pb: socket.userData.pb,
				action: socket.userData.action
			});    
		}
    }
	if (pack.length>0) io.emit('remoteData', pack);
}, 40);