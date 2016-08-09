var th = require('through2');
var http = require('http');

function onRequest(req, res) {
	var stream = th(write, end);
	if(req.method === 'POST') {
		req.pipe(stream).pipe(res);
	}
}

function write(buffer, _, next){
	var string = buffer.toString().toUpperCase();

	this.push(string);
	next();
}

function end(done){
	done();
}
var server = http.createServer(onRequest);
server.listen(process.argv[2]);
