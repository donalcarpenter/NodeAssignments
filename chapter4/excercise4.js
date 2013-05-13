var http = require('http');
var util = require('util');
var fs = require('fs');

var readline = require('readline');

rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Enter filename >');
rl.prompt();

rl.on('line', function(line){

	console.log('reading file ' + line);

	var readStream = fs.createReadStream(line);

	var httpClientOptions = {
			host : 'localhost',
			port : 4000,
			method : 'POST',
			path : '/sampleData/' + line
		};


	var req = http.request(httpClientOptions, function(res){
			console.log(res.statusCode + ' ' + JSON.stringify(res.headers));
		}).on('error', function(e) {
			console.log("Got error: " + e.message);
		});

	readStream.pipe(req);
/*

	
	fs.open(line, 'r', function(err, fd){

		if(err){
			console.log('error loading file ' + line);
			console.log(err);
			return;
		}

		var httpClientOptions = {
			host : 'localhost',
			port : 4000,
			method : 'POST',
			path : '/sampleData/' + line
		};

		fs.fstat(fd, function(err, stat){
			if(err){
				console.log('could not get file stats');
			}

			var chunkSize = 512;
			var buffer = new Buffer(chunkSize);
			var bytesRemaining = stat.size;

			console.log('going to read file with ' + bytesRemaining + ' bytes');

			var req = http.request(httpClientOptions, function(res){
				console.log(res.statusCode + ' ' + JSON.stringify(res.headers));
			}).on('error', function(e) {
			  console.log("Got error: " + e.message);
			});

			(function streamFileToRequest(){
				fs.read(fd, buffer, 0, chunkSize, (stat.size - bytesRemaining), function(err, bytesRead, data){

					if(err){
						console.log(err);
					}

					bytesRemaining -= bytesRead;
					console.log('Read ' + bytesRead + ', ' + bytesRemaining + ' remaining');

					req.write(data);

					console.log(data.toString());

					if(bytesRemaining > 0){
						streamFileToRequest();
					}
					else{
						console.log('data upload complete.. closing request');
						req.end();
						fs.close(fd);
					}
				});
			})();
		});
	});
*/
	rl.prompt();
}).on('close', function(){
	console.log('KTHXBYE');
	process.exit(0);
});