var http = require('http');
var url = require('url');

var server = http.createServer(onRequest);
server.listen(Number(process.argv[2]));

function onRequest(req, res) {
	var parsedURL = url.parse(req.url, true);
	var time = new Date(parsedURL.query.iso);
	console.log(time);
	var result;

	if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time);
	} else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time);
	}

	if (result) {
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}
}

function parsetime(time) {
	return {'hour': time.getHours(),
			'minute': time.getMinutes(),
			'second': time.getSeconds()	
		};
}

function unixtime(time) {
	return {'unixtime': time.getTime()}
}