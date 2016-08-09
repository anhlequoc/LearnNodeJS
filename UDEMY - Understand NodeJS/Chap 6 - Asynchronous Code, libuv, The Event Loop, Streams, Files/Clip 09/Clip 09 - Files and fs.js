var fs = require('fs');
var greet = fs.readFileSync('./greet.txt','utf-8'); // fs.readFileSync đọc raw data từ buffer, rồi mới convert theo utf-8
console.log(greet);

/*fs.readFileSync: chữ sync nghĩa là khi chạy, javascript sẽ chờ đến khi buffer được fill hết rồi mới chạy đến dòng 3 tiếp theo
- thích hợp để khi cần thiết đọc hết file cấu hình rồi mới chạy tiếp
- không thích hợp khi đọc data để hiển thị cho user vì có thể có nhiều user cùng truy cập file này, càng lâu khi file càng lớn do nodejs chạy trên 1 process duy nhất,
-> thay vào đó dùng readFile (callback)
*/

var greet2 = fs.readFile('./greet.txt', 'utf-8', function(err, data){
    console.log(data);
}); // nếu thiếu option (utf-8), data sẽ là buffer's raw data

/* cấu trúc error-first callback (giống function (err, callback){})
    - error-first callback: hàm callback có 1 Error Object như là param đầu tiên của nó
    - cách này nghĩa là theo standard, nếu truyền 1 callback vào fucntion, thì mình cần đưa vào param đầu tiên là Error. Nếu
    không có lỗi nào thì là Eror null, và chạy tiếp dòng tiếp theo 
*/

console.log('Done!'); // sẽ chạy dòng này trước khi chạy line 12 do nodejs là async