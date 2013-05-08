var fs = require('fs');

fs.open('a.txt', 'a', function(err, fd){
	if(err) throw err;

	fs.write(fd, new Buffer('7'), 0, 1, 10, null);
});