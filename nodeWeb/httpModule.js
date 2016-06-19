var http = require('http');
var httpObj = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write('Hello World');
	response.end();
});
httpObj.listen(8888);
console.log("Server is started");