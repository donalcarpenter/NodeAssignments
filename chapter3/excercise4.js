var fs = require('fs');

fs.open('a.txt', 'w', function(err, fd){

	var buffer = new Buffer('ABCDEFGHIJLKLMNOPQRSTU- VXYZ0123456789abcdefghijklmnopqrstuvxyz');
	fs.write(fd, buffer, 0, buffer.length, 0, function(err, written){
		if(err) throw err;
		console.log('we just wrote ' + written + ' bytes');
	})
});