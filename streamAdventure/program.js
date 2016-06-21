console.log('beep boop');
var fs = require('fs');
var readableStream = fs.createReadStream('file.txt'); console.log(readableStream);
var data = '';

readableStream.on('data', function(chunk) {
    data+=chunk;
});

readableStream.on('end', function() {
    console.log(data);
});