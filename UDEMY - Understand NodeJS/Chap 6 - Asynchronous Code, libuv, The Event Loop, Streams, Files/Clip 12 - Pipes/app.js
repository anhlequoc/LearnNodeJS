var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream('./greet.txt');
var writable = fs.createWriteStream('./greetcopy.txt');

readable.pipe(writable); //readable is src, writeable is destination - câu lệnh này giống dòng 23 ở clip 10/app.js
//chú ý: pipe() trả về 1 destination, nên có thể dùng lệnh pipe liên tục: readable.pipe(writeable).pipe(2ndDest)...

var compressed = fs.createWriteStream('./greet.txt.gz');
var gzip = zlib.createGzip(); // đây là 1 stream
readable.pipe(gzip).pipe(compressed); //METHOD CHAINING: read from the text file > compress it > write compressed data to a file
/* Method chaining:
    - a method returns an object so we can keep calling more methods.
    - sometimes it returns the parent object (called 'cascading') and sometimes some other objects.
*/