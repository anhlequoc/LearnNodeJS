'use strict';
var EventEmitter = require('events');
module.exports = class Greetr extends EventEmitter {
    /*
    Sử dụng extends và supper là thay cho inherits và call(this) ở cách gọi truyền thống - file app - non class.js
        - extends: util.inherits(Greetr, EventEmitter);
        - super: EventEmitter.call(this);
    */
    constructor(){
        super();
        this.greeting = 'Hello World';
    }
    greet(data){
        console.log(this.greeting + ': ' + data);
        this.emit('greet', data);
    }
}