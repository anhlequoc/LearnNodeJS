var net = require('net');
var port = Number(process.argv[2]);//console.log(typeof(port));

var server = net.createServer(function(socket) {
	data = returnDate();

	socket.write(data + "\n");
	socket.end();
});
server.listen(port);
//Sat Jun 18 2016 21:33:57 -> "YYYY-MM-DD hh:mm"
function returnDate(){
	var date = new Date(); //console.log(date);
	var year = date.getFullYear();
	var month = date.getMonth() + 1; //console.log(month);
	var dayInMonth = date.getDate(); // returns the day of month
	var hour = date.getHours();
	var minute = date.getMinutes();

	if (month<10) {
		month = "0" + month;
	}
	if (hour<10) {
		hour = "0" + hour;
	}
	if (minute<10) {
		minute = "0" + minute;
	}
	// console.log(year, month, )
	return (year + '-' + month + '-' + dayInMonth + ' ' + hour + ':' + minute);
}

// SOLUTION
//  var net = require('net')

//  function zeroFill(i) {
//    return (i < 10 ? '0' : '') + i
//  }

//  function now () {
//    var d = new Date()
//    return d.getFullYear() + '-'
//      + zeroFill(d.getMonth() + 1) + '-'
//      + zeroFill(d.getDate()) + ' '
//      + zeroFill(d.getHours()) + ':'
//      + zeroFill(d.getMinutes())
//  }

//  var server = net.createServer(function (socket) {
//    socket.end(now() + '\n')
//  })

//  server.listen(Number(process.argv[2]))