var fs = require('fs');
var readable = fs.createReadStream('./greet.txt', {encoding: 'utf8', highWaterMark: 16*1024});
/*
- highWaterMark: là kích thước lớn nhất của 1 chunk (đơn vị byte)
- file greet.txt có dung lượng là 65kb -> sẽ có 5 chunk tất cả để load hết content của file greet.txt
*/

var writable = fs.createWriteStream('./greetcopy.txt');


//Vì readable kế thừa Stream, Stream kế thừa Event Emitter nên
readable.on('data', function (chunk) { //data là event được quy định ở Event Emitter
    console.log(chunk.length); //chunk.length: độ lơn của chunk
    /*result:
        16384
        16384
        16384
        16384
        440
    thực tế: hàm này chạy 5 lần để load hết data, nếu không có highWaterMark, hàm chạy 1 lần
    */

    writable.write(chunk); // copy nội dung từ greet.txt sang greetcopy.txt
});
