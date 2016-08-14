var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	var html = fs.createReadStream(__dirname + '/index.html').pipe(res);
	/*
		cho vào stream vào pipe như này sẽ chia data thành các chunk, giải quyết vấn đề khi lượng user lớn cùng request đến file html này thì không mất thời gian server xử lý và chờ đợi như ở chapter 6

	*/

	// res.end(); - nếu có dòng này thì stream bị end, không trả về gì cả
}).listen(1338);