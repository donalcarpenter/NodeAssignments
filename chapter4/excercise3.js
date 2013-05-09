var http = require('http');
var fs = require('fs');
var util = require('util');

var finalize = function (res, status, content){
	res.writeHead(status, {'Content-Type': 'text/plain'});
	res.end(content);
}

http.createServer(function(req, res){
	var filepath = '.' + req.url;

	fs.open(filepath, 'w+', function(err, fd){

		if(err){
			finalize(res, 500, util.inspect(err));
		}

		req.on('data', function(chunk){
			var totalBytesWritten = 0;
			console.log('about to write: ' + chunk.length + ' bytes');
			
			(function writeOutRequestBody(){

				if(totalBytesWritten < chunk.length){
					fs.write(fd, chunk, totalBytesWritten, chunk.length, totalBytesWritten, function(err, written){

						if(err){
							finalize(res, 500, util.inspect(err));
						}

						totalBytesWritten += written;

						console.log(totalBytesWritten + ' written to ' + filepath);

						writeOutRequestBody(chunk);
					});
				}else{
					var result = 'success, ' + totalBytesWritten + ' written to ' + filepath;
					console.log(result);
						
					finalize(res, 200, result);
				}

			})();
		});
	});
}).listen(4000);