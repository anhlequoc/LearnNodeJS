var concat = require('concat-stream');
// console.log(typeof(concat));
var con = concat(gotText);
function gotText(txtBuffer) {
	var result = txtBuffer.toString().split('').reverse().join('');
	console.log(result);
}
process.stdin.pipe(con);

// Here's the reference solution:

  // var concat = require('concat-stream');

  // process.stdin.pipe(concat(function (src) {
  //     var s = src.toString().split('').reverse().join('');
  //     console.log(s);
  // }));