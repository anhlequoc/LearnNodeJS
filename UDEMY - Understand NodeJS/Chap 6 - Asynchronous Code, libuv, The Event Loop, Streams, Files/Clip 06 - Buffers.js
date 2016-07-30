//some functions of buffer

var buf = new Buffer("Hello", "utf-8");
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wew');
console.log(buf.toString());

var buf2 = new Buffer('Hello World', 'base64');//encrypt type base64
console.log(buf2);
console.log(buf2.toString());