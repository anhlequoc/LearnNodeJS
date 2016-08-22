var express = require('express');
var bodyParser = require('body-parser');
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
	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
	//req.query: trả về object chứa các attibute trong querystring
	//req.query.qstr: lấy giá trị của attribute 'qstr' trong querystring gửi lên từ browser
});

//xử lý POST:
	// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/person', urlencodedParser, function(req, res){ //urlencodedParser - là middleware - sẽ đc call trước function callback này
	//req.body trả về object chứa form data
	res.send('Welcome, ' + req.body.firstname + ' ' + req.body.lastname + ' !');
	console.log(req.body);//debug
});

//xử lý POST với JSON data
var jsonParser = bodyParser.json();
app.post('/personjson', jsonParser, function (req, res) {
	res.send('Thank you for sending JSON!');
	console.log(req.body);
});

app.listen(port);