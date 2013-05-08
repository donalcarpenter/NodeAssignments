var http = require('http');
var util = require('util');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	var i = 0;

	(function outputdates(){

		setTimeout(function(){

			res.write(new Date().toISOString() + '\n');

			if(++i < 100){
				outputdates();
			}else{
				res.end();
			}
		}, 100);
	})();
}).listen(4000);