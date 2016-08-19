var express = require('express');
//var ejs = require('ejs');
var app = express();

var port = process.env.PORT || 3000;
//process.env.PORT: biến môi trường của server, trả về port của server
// biên port lấy giá trị này nếu tồn tại hoặc nếu không thì lấy 1 port cụ thể là 3000

app.use('/assets', express.static(__dirname + '/public')); //chuyển đường dẫn là assets để access vào thư muc /public cho các static files

//set view engine là EJS, đọc các static file định dạng .ejs, mặc định (có thể thay đổi sau) ở folder /views
app.set('view engine', 'ejs');
app.get('/', function(req, res){
	res.render('index'); //index.ejs, không cần để .ejs do có thể có nhiều view engine khác nhau
});

//routing:
app.get('/person/:id', function(req, res){
	res.render('person', { ID: req.params.id });
})
//:id là con đó là biến -> gọi ra bằng req.params.id



//create my own middleware
app.use('/', function(req, res, next){
	console.log('Request url: ' + req.url);
	next();
});


app.get('/api', function(req, res){
	res.json({ firstname: 'Anh', lastname: 'Le' });
});

app.listen(port);