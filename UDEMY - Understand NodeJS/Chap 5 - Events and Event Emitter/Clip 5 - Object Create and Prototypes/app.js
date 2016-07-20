var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        console.log(this.firstname + ' ' + this.lastname);
    }
};

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
john.greet();

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';
jane.greet();