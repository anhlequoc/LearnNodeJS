var http = require('http');
var fs = require('fs');

var server = http.createServer(onRequest);
server.listen(Number(process.argv[2]));

function onRequest(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	fs.createReadStream(process.argv[3]).pipe(response);
}

// function data(response) {
// 	var fileLocation = process.argv[3].toString();typeof(fileLocation);
// 	var src = fs.createReadStream(fileLocation);
// 	response = src.pipe(response);

// 	return response;
// }
// ---
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function (req, res) {
//     res.writeHead(200, {'content-type': 'text/plain'});

//     fs.createReadStream(process.argv[3]).pipe(res)
// });

// server.listen(Number(process.argv[2]));