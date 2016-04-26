//Bai 3
var fs = require('fs');
var str = fs.readFileSync(process.argv[2]);
str = str.toString();
//fs.readFileSync('/path/to/file') tra ve Buffer object -> convert to string
//console.log(str);
var wordsArr = str.split('\n');
console.log(wordsArr.length - 1);
