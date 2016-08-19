var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
//process.env.PORT: biến môi trường của server, trả về port của server
// biên port lấy giá trị này nếu tồn tại hoặc nếu không thì lấy 1 port cụ thể là 3000

app.get('/', function(req, res){
	res.send('<html><head>Express sample</head><body><h4>Hello Express!</h4></body></html>');
});

app.get('/api', function(req, res){
	res.json({ firstname: 'Anh', lastname: 'Le' });
});

app.listen(port);