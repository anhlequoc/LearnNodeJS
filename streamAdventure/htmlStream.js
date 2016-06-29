//Solution là pipe các stream qua các module để sử dụng function ở các module
//chú ý: tr.select('.loud').createStream() cho ta 1 stream sửa trực tiếp content file html, túc file html này được update ngay lập tức sau đó

var through = require('through2');
var fs = require('fs');
var trumpet = require('trumpet');
var tr = trumpet(); //console.log(typeof(tr));
process.stdin.pipe(tr);
var streamUppercase = tr.select('.loud').createStream();
var stream2 = through(write, end);
function write(buffer, utf8, next){
	var string = buffer.toString().toUpperCase();
	this.push(string);
	next();
}
function end(done){
	done();
}
streamUppercase.pipe(stream2).pipe(streamUppercase);
tr.pipe(process.stdout);

// Here's the reference solution:

  // var trumpet = require('trumpet');
  // var through = require('through2');
  // var tr = trumpet();

  // var loud = tr.select('.loud').createStream();
  // loud.pipe(through(function (buf, _, next) {
  //     this.push(buf.toString().toUpperCase());
  //     next();
  // })).pipe(loud);

  // process.stdin.pipe(tr).pipe(process.stdout);