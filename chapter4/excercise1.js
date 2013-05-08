var http = require('http');
var fs = require('fs');
var util = require('util');

http.createServer(function(req, res){

	var filepath = '.' + req.url;


	var endreq = function(res, status, content){
		res.writeHead(status, { 'Content-Type': 'text/plain'});

		res.end(content);
	}

	fs.open(filepath, 'r', function(err, fd){
		if(err){
			endreq(res, 500, util.inspect(err));
		}
		else{
			fs.stat(filepath, function(err, stat){
				var status = 200;
				var content = '';
				if(err){
					endreq(res, 500, util.inspect(err));
				}		
				var data = new Buffer(stat.size);
				fs.read(fd, data, 0, stat.size, 0, function(err, bytesRead){
					if(err){
						status = 500;
						content = util.inspect(err);
					}else{
						content = data.toString();
					}

					endreq(res, status, content);
				})
			});
		}
	})

}).listen(4000);