'use strict';
var Greetr = require('./greetr - class ES6');
var greeter1 = new Greetr();
greeter1.on('greet', function(data) {
    console.log('Someone greeted!: ' + data);
}); 
greeter1.greet('anh le');

//có thể đưa class thành module (dùng module.exports) vì class cũng chỉ là function Constructor
