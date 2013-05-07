var eventEmitter = require('events').EventEmitter,
	util = require('util');

var Ticker = function(){

	var self = this;

	setInterval(function(){
		self.emit('tick', self);
	}, 1000);

	return this;
}

util.inherits(Ticker, eventEmitter);


var ticker = new Ticker();
ticker.on('tick', function(t){
	console.log('TICK');
});