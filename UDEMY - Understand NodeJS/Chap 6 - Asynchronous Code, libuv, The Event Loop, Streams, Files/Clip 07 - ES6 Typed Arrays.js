var buffer = new ArrayBuffer(8); //8 là 8 bytes, hay 64 bits - buffer sẽ chứa raw binary data
var view = new Int32Array(buffer); //32 là 32 bits - view chứa data không ở dạng raw
/*
buffer ở trên chứa được 64 bits, view là 1 array chứa buffer, mỗi view[] là 32 bits -> lưu đc 2 view[] thôi
*/
view[0] = 12;
view[1] = 15;
view[2] = 16;
console.log(view); //-> không hiện view[2]
console.log(typeof(buffer));
console.log(buffer);
console.log(buffer.toString());
/*
view cho phép làm việc với binary data, cho phép put một số cơ số 10 hay dùng
Từ version ES6 trở đi, javascript mới có khả năng làm việc với binary data (chỉ gồm các số 0 và 1)
*/