var fs = require('fs');

fs.open('a.txt', 'a+', function(err, fd){
	var buffer = new Buffer('abc');
	fs.write(fd, buffer, 0, buffer.length, null, function(err, written){
		if(err) throw err;
		console.log('appended ' + written + ' bytes');
	})
})