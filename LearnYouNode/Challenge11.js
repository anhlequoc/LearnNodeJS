var http = require('http');
var map = require('through2-map');
var server = http.createServer(onRequest);
server.listen(Number(process.argv[2]));

function onRequest(request, response) {
	if (request.method != 'POST'){
		return response.end('Just process POST request!');
	} else {
		request.pipe(map(function (chunk) {
			return chunk.toString().toUpperCase();
		})).pipe(response);
	}
}