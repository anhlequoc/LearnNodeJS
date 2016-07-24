var EventEmitter = require('events');
var util = require('util');
function Person() {
    this.firstname = 'John';
    this.lastname = 'Doe';
}
Person.prototype.greet = function () {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
};

function Policeman() {
    Person.call(this);//theo cách dùng call() thì this ở đây trước tiên là empty object, sau đó Person.call sẽ truyền vào các attribute firstname (John), lastname (Doe) ở trên
    //cách này đảm bảo object của Policeman có mọi attribute của Person
    this.badgeNumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();