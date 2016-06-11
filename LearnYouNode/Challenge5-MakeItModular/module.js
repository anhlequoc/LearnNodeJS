var fs = require('fs');
var path = require('path');

module.exports = function(dirName, extName, callback) {

	var extFiltered = '.' + extName;
		// console.log(extFiltered); debug
	fs.readdir(dirName, function (err, files){
		//console.log(files); debug: show mang chua cac file
		if (err) {
			return callback(err);
		} else {
			listf = [];// list the result
			for (var i = 0; i <= files.length; i++) {
				if (path.extname(files[i]) === extFiltered) {
					listf.push(files[i]);
				} //extName with dau .
			}
			callback(null, listf);
		}
	})
};