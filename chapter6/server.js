var net = require('net');
var fs = require('fs');
var spawn = require('child_process').spawn;
var util = require('util');

console.log('opening sample data file');
fs.open('sampledata.txt', 'a+', function(err, fd){

	if(err){
		console.log(err);
		return;
	}

	console.log('creating server');
	var host = net.createServer(function(socket){

		console.log('client connected');

		console.log('passing file descriptor: ' + util.inspect(fd));

		var descriptor = {fd: fd};

		// pass file descriptor to child
		socket.write(JSON.stringify(descriptor));

		socket.on('data', function(data){
			if(data.toString()=='done'){
				child.kill();
				host.close();
			}
		});
	}).listen('/Users/dc36659/Desktop/Developer/node.js/NodeAssignments/chapter6/unixSocket');


	console.log('spawning child');
	var child = spawn('node', ['client.js']);
	child.stdout.on('data', function(data){
		console.log(data.toString());
	});
});