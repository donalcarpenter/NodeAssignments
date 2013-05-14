var net = require('net');

var client = net.createConnection(4001);

client.on('data', function(data){
	console.log(data.toString());
});


var readline = require('readline');
var userid;

rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('username:');
rl.prompt();

var registered  = false;

rl.on('line', function(line){

	var operation = {};

	if(!registered){
		console.log('registering');
		userid = line;
		operation.user = line;
		operation.action = "register";
		registered = true;

		rl.setPrompt(userid + '>');
	}else{
		operation.user = userid;
		operation.action = "chat";
		operation.data = line; 
	}

	client.write(JSON.stringify(operation));

	rl.prompt();
});