function greet() {
    var reply = [this.person, this.role, this.age].join(' ');
    console.log('he he' + reply);
}

var i = {role: 'Douglas Crockford', person: 'Javascript Developer'};

greet();
greet.call(i); // Douglas Crockford Is An Awesome Javascript Developer
greet.call({person: 'anh le', role: 'the bad', age: 28});
greet.apply({person: "quoc anh", role: "the good"});