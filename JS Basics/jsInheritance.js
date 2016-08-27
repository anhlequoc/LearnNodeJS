// source: https://www.youtube.com/watch?v=O8wwnhdkPE4 - Object Orient Javascript - Author: Derek Banas

var customer = {
	name: 'Anh Le',
	speak: function(){
		return "My name is " + this.name;
	},
	address: {
		street: '11 Kim Ma',
		city: 'Hanoi',
		country: 'VN'
	}
};
console.log(customer.speak());
console.log("I'm at " + customer.address.street);
customer.address.county = 'Ba Dinh';
console.log(customer.address.county);

//Constructor function ~ same same as class of other language
function Person (name, street) {
	this.name = name;
	this.street = street;

	this.info = function(){
		return "My name is " + this.name + ". I live at " + this.street;
	}
}

var anhLeQuoc = new Person("Anh Le Quoc", "11 Kim Ma");
console.log(anhLeQuoc.info());

//Check if an object belongs to a constructor
if (anhLeQuoc instanceof Person){
	console.log(anhLeQuoc.name + " is an instance of Person");
}

function changeName(Person){
	Person.name = "Anh Le";
}
changeName(anhLeQuoc);
console.log(anhLeQuoc.name);