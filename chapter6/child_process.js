var exec = require('child_process').exec;
var util = require('util');

exec('cat *.js wc', function(err, stdout, sdterr){
	if(err){
		console.log('err: ' + util.inspect(err));
		return;
	}

	console.log(stdout);
});