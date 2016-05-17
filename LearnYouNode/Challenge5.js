var fs = require('fs');
var path = require('path');
var extFiltered = '.' + process.argv[3];
// console.log(extFiltered); debug
fs.readdir(process.argv[2], function callback(err, list){
	//console.log(list); debug: show mang chua cac file
	for (var i = 0; i <= list.length; i++) {
		if (path.extname(list[i]) === extFiltered) {
			console.log(list[i]);
		} //extName with dau .
	}

})

/* Solution 
   var fs = require('fs')
   var path = require('path')

   fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
         if (path.extname(file) === '.' + process.argv[3])
           console.log(file)
       })
     })
*/
//adf adf af 