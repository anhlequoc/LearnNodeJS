var express = require('express');
//var ejs = require('ejs'); template engine không cần require module như các module khác
var app = express();

var port = process.env.PORT || 3000;
//process.env.PORT: biến môi trường của server, trả về port của server
// biên port lấy giá trị này nếu tồn tại hoặc nếu không thì lấy 1 port cụ thể là 3000

app.use('/assets', express.static(__dirname + '/public')); //chuyển đường dẫn là assets để access vào thư muc /public cho các static files

//set view engine là EJS, đọc các static file định dạng .ejs, mặc định (có thể thay đổi sau) là ở folder /views
app.set('view engine', 'ejs');
app.get('/', function(req, res){
	res.render('index'); //index.ejs, không cần có phần mở rộng ".ejs" do có thể có nhiều view engine khác nhau -> xem kỹ hơn
});

//routing:
app.get('/person/:id', function(req, res){
	res.render('person', { ID: req.params.id });//hầu hết các view engine đều sử dụng cách truyền data vào file static kiểu này, chèn 1 option vào sau tên file
});
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