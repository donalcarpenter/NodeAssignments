var fs = require('fs');

fs.stat('excercise1.js', function(err, stats){
	console.log(stats);
})