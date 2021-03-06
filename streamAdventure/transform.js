var through = require('through2'); //console.log(typeof(through));
var stream = through(write, end);

function write(buffer, utf8, next) {
	var string = buffer.toString().toUpperCase();

	this.push(string);
	next();
}
function end(done) {
	done();
}
process.stdin.pipe(stream).pipe(process.stdout);

// Here is the reference solution:
  // var through = require('through2');
  // var tr = through(function (buf, _, next) {
  //     this.push(buf.toString().toUpperCase());
  //     next();
  // });
  // process.stdin.pipe(tr).pipe(process.stdout);