var http = require('http');
var util = require('util');

http.get({host: 'www.google.com', port: 80, path: '/index.html'}, function(res){

	console.log(util.inspect(res));

}).on('error', function(err){
	console.log(err);
});