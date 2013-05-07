var buffer = new Buffer(100);
for(var i = 0; i < 100; i++){
	buffer[i] = i;
}

var sliced = new Buffer(20);
buffer.copy(sliced, 0, 40, 60);

console.log(sliced.toString());