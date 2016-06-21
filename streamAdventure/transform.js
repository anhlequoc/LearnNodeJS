var through = require('through2');
var stream = through(write, end);
consoloe.log(typeof(stream));
function write(stream, 'utf8', next) {
	stream = stream.toString().toUpperCase();

	this.push(stream + '\n');
	next();
}

function end(done) {
	done();
}

stream.on('data', write);
stream.on('end', end);

process.stdin.pipe(stream).pipe(process.stdout);