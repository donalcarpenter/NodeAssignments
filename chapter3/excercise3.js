var fs = require('fs');

fs.open('excercise1.js', 'r', function(err, fd){
	if(err) { throw err };

	var buffer = new Buffer(5);

	fs.read(fd, buffer, 0, 5, 4, function(err, readBytes){
		console.log("just read " + readBytes + ' bytes');
		console.log(buffer.toString());

		var buf2 = new Buffer(6);

		fs.read(fd, buf2, 0, 5, 10, function(err, readBytes2){
			console.log("just read " + readBytes2 + ' bytes');
			console.log(buf2.toString());
		})

	});

});