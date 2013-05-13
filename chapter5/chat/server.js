var net = require('net');
var util = require('util');

var sockets = [];

net.createServer(function(socket){

	console.log('new connection : ' + util.inspect(socket));

	sockets[sockets.length] = socket;

	socket.on('data', function(data){
		console.log('echoing ' + data.toString());

		for(i = 0; i < sockets.length; i++){
			sockets[i].write('echo: ' + data.toString());			
		}
	
	})

}).listen(4001);