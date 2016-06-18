var http = require('http');
var bl = require('bl');

var urlArr = [process.argv[2], process.argv[3], process.argv[4]];
var result = [];
var count = 0;
//console.log(urlObj);

<<<<<<< HEAD
for(var i = 0; i<3; i++) {
	httpGet(i);
}

function httpGet(index) {
	http.get(urlArr[index], function(response){
=======

	http.get(urlArr[0], function(response){
>>>>>>> 520ced0b8a99fb0bffa7e7bb91ae995c817e916b
		response.pipe(bl(function(err, data){
			if (err){
				return console.log(err);
			}
<<<<<<< HEAD
			//console.log(data.toString());
			result[index] = data.toString();
=======
			result[0] = data.toString();
>>>>>>> 520ced0b8a99fb0bffa7e7bb91ae995c817e916b
			count++;
			if (count == 3) {
				printResult();
				count = 0;
			}
			
		}));
	});

	http.get(urlArr[1], function(response){
		response.pipe(bl(function(err, data){
			if (err){
				return console.log(err);
			}
			result[1] = data.toString();
			count++;
			if (count == 3) {
				printResult();
				count = 0;
			}
			
		}));
	});

	http.get(urlArr[2], function(response){
		response.pipe(bl(function(err, data){
			if (err){
				return console.log(err);
			}
			result[2] = data.toString();
			count++;
			if (count == 3) {
				printResult();
				count = 0;
			}
			
		}));
	});

function printResult() {
	for (var i = 0; i < result.length; i++) {
		console.log(result[i]);
	}
}
// http.get(urlObj.url1, function(response){
// 	//response.setEncoding('utf8');
// 	response.pipe(bl(function(err, data){
// 		if (err){
// 			return console.log(err);
// 		} else {
// 			result[0] = data.toString();
// 			console.log(result[0]);
// 		}
// 	}));
// });

// http.get(urlObj.url2, function(response){
// 	//response.setEncoding('utf8');
// 	response.pipe(bl(function(err, data){
// 		if (err){
// 			return console.log(err);
// 		} else {
// 			result[1] = data.toString();
// 			console.log(result[1]);
// 		}
// 	}));
// });

// http.get(urlObj.url3, function(response){
// 	//response.setEncoding('utf8');
// 	response.pipe(bl(function(err, data){
// 		if (err){
// 			return console.log(err);
// 		} else {
// 			result[2] = data.toString();
// 			console.log(result[2]);
// 		}
// 	}));
// });
// //console.log(result);
