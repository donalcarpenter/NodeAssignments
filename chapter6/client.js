var net = require('net');
var fs = require('fs');
var util = require('util');

console.log('spawned');

var client = net.createConnection('/Users/dc36659/Desktop/Developer/node.js/NodeAssignments/chapter6/unixSocket');



client.on('connect', function(){
	console.log('client connected');
}).on('data', function(data){
	var json = JSON.parse(data);
	var buffer = new Buffer('more sample data');
	console.log('writing to file handle ' + json.fd);
	fs.write(json.fd, buffer, 0, buffer.length, null, function(err, written){
		console.log(written + ' bytes written to file');
	});
	client.write('done');
});