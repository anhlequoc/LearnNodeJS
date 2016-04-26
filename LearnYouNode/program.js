//Bai 1
//console.log('HELLO WORLD');

//Bai 2
//console.log(process.argv); //process là 1 object trong node, argv là attribute dạng mảng của process, chứa toàn bộ command line
// var array = process.argv;
// var sum = 0;
// for (var i = 2; i<array.length; i++) {
// 	sum += Number(array[i]);
// }
// console.log(sum);

//Bai 3
// var fs = require('fs');
// var str = fs.readFileSync(process.argv[2]);
// str = str.toString();
// //fs.readFileSync('/path/to/file') tra ve Buffer object -> convert to string
// //console.log(str);
// var wordsArr = str.split('\n');
// console.log(wordsArr.length - 1);

//Bai 4 - NodeJS asynchronous
