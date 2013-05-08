var http = require('http');
var util = require('util')

http.createServer(function(req, res){
	res.writeHead(200, { 'Content-Type': 'text/plain', 'Custom' : 'donal'} );
	//res.setHeader('Custom', 'donal2');
	res.write(req.method + ' ' + req.url);
	res.write(util.inspect(req.headers, true));
	
	var ohhai = new Buffer("oh hai");
	res.write(ohhai);

	res.end();
}).listen(4000);