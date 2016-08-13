var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
	res.writeHead(200, { 'Content-Type' : 'text/html' });
	var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
	/*
		- Nếu không có option (utf8): html là stream
		- Nếu có option (là utf8): html là string và dùng được hàm replace ở dưới
	*/

	//chính sửa file html bằng template {Messages} đặt ở file html
	var message = 'Hello World here....';
	html = html.replace('{Message}', message);
	res.end(html);
}).listen(1337);