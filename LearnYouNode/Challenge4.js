//Bai 4 - NodeJS asynchronous
var fs = require('fs');
//console.log(process.argv[2]); -> debug 
fs.readFile(process.argv[2], 'utf8', function(err, data){
	if (err) throw err;
	//console.log(data);
	//console.log(typeof(data)); -> string
	var arr = data.split('\n');
	console.log(arr.length - 1);

})
//note fs.readFile(filename, option, functoin callback(){}):
// - option la 'utf8': data lấy được sẽ là nội dung của file
// - nếu không có option: data lấy được là raw data của buffer đó

