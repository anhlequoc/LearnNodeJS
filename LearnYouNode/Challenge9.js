var net = require('net');
var date = new Date();
var port = process.argv[2];console.log(typeof(port));
var server = net.createServer(function(socket) {
	socket.write(data);
	console.log(socket);
	socket.end();
});