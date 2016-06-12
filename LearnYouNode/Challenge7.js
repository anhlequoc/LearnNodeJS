var http = require('http');
var bl = require('bl');
var concatStream = require('concat-stream');

http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	response.pipe(bl(function(err, data){
		if (err){
			console.log("Error!");
		} else {
			data = data.toString();
			console.log(data.length);
			console.log(data);
		}
	}));
});