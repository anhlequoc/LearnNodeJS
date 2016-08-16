var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'application/json'});
	var obj = {
		'firstname': 'John',
		'lastname' : 'Doe'
	};
	res.end(JSON.stringify(obj)); //convert obj thành 1 string, format string đó ở dạng json
}).listen(1338);
//day la 1 api don gian, serialize 1 object thanh json, sau do deserialize json do thanh object o phia browser
