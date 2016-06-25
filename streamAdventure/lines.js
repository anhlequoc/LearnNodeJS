var split = require('split');
var through = require('through2');
var countLine = 1;
process.stdin
		.pipe(split())
		.pipe(through(function(line, _, next){
			//console.log(typeof(line));console.log(line);			
			line = line.toString();
			if (countLine %2 == 0) {
				line = line.toUpperCase();				
			} else {
				line = line.toLowerCase();
			}
			console.log(line);
			countLine++;
			next();
		}))
		.pipe(process.stdout);

// SOLUTION
	// var through = require('through2');
	// var split = require('split');

	// var lineCount = 0;
	// var tr = through(function (buf, _, next) {
	//     var line = buf.toString();
	//     this.push(lineCount % 2 === 0
	//         ? line.toLowerCase() + '\n'
	//         : line.toUpperCase() + '\n'
	//     );
	//     lineCount ++;
	//     next();
	// });
	// process.stdin
	//     .pipe(split())
	//     .pipe(tr)
	//     .pipe(process.stdout);
