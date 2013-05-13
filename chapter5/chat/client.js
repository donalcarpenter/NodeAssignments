var net = require('net');

var client = net.createConnection(4001);

client.on('data', function(data){
	console.log(data.toString());
});

var readline = require('readline');

rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('say something >');
rl.prompt();

rl.on('line', function(line){

	client.write(line);

	rl.prompt();
});