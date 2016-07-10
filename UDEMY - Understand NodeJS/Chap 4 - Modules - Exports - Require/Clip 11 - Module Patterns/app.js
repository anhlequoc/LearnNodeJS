var greet1 = require('./greet1');
greet1();

var greet2 = require('./greet2').greet;//require('./greet2') là một object nên viết ntn nghĩa là truy cập vào attribute greet của object đó
greet2();
/* -> nhìn thấy viết gì đó sau require('./modulename') thì nghĩa xem ở module xem đang truy cập đến attribute nào của module đó
 */

var greet3 = require('./greet3');
greet3.greet();
//chu y
greet3.greeting = 'changed hello world!';
var greet3b = require('./greet3');
greet3b.greet(); //in ra 'changed hello world'
//lý do: require('./greet3') ở line 13 chỉ là gọi lại object đã tạo ở line 9, (cả line 9 và line 13 đều trỏ đến cùng 1 object trong bộ nhớ)
// cho nên khi object.greeting thay đổi thì line 14 cũng in ra sự thay đổi đó

var Greet4 = require('./greet4'); //Greet4 - viết chữ hoa ở đầu là constructor - is now a constructor function
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();

/* đây là 5 cách phổ biển của MODULE PATTERN, được dùng tùy theo hoàn cảnh, yêu cầu của architecture
 */