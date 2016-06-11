var mymodule = require('./module.js');

mymodule(process.argv[2], process.argv[3], function(err, listf){
	if (err){
		console.log('Error!');
	} else {
		for (var i = 0; i<listf.length;i++){
			console.log(listf[i]);
		}
	}
});

// --- SOLUTION ---
//  Here's the official solution in case you want to compare notes:
// ─────────────────────────────────────────────────────────────────────────────
//  _C:\Users\ThinkPad\AppData\Roaming\npm\node_modules\learnyounode\exercises
//  \make_it_modular\solution\solution.js_ :

//     var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]

//     filterFn(dir, filterStr, function (err, list) {
//       if (err)
//         return console.error('There was an error:', err)

//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })

// ─────────────────────────────────────────────────────────────────────────────
//  _C:\Users\ThinkPad\AppData\Roaming\npm\node_modules\learnyounode\exercises
//  \make_it_modular\solution\solution_filter.js_ :

//     var fs = require('fs')
//     var path = require('path')

//     module.exports = function (dir, filterStr, callback) {

//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)

//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//       })
//     }
