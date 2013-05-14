var net = require('net');
var util = require('util');

var sockets = [];

net.createServer(function(socket){

	console.log('new connection');

	socket.on('data', function(data){

		var jdata = JSON.parse(data);

		var message = "";

		if(jdata.action == "register"){
			var registration = {user: jdata.user, socket: socket}
			sockets[jdata.user] = registration;
			message = registration.user + ' has joined';
		}else{
			message = jdata.user + ': ' + jdata.data;
		}

		console.log('echoing ' + data.toString());

		for(var registration in sockets){
			if(sockets[registration].socket === socket){
				if(jdata.action == "register"){
					socket.write('registration complete, welcome ' + jdata.user);
				}
			}else{
				sockets[registration].socket.write(message);			
			}
		}
	
	})

}).listen(4001);