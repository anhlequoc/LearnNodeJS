// source: https://www.youtube.com/watch?v=O8wwnhdkPE4 - Object Orient Javascript - Author: Derek Banas
function Mammal(name) {
	this.name = name;
	this.getInfor = function () {
		return "The mammal name is " + this.name;
	}
}

Mammal.prototype.sound = "Grrr...!";
Mammal.prototype.makeSound = function () {
	return this.name + " says " + this.sound;
};

var grover = new Mammal('grover');
console.log(grover.getInfor());
console.log(grover.makeSound());

//chú ý, khác nhau giữ attribute khai báo trong constructor và attribute khai báo bằng add prototype
console.log("name is attribute of grover: " + grover.hasOwnProperty('name')); //true
console.log("sound is attribute of grover: " + grover.hasOwnProperty('sound')); //false
console.log("sound is attribute of Mammal.prototype: " + Mammal.prototype.hasOwnProperty('sound')); //true


//add more function for built-in Object
//Object in this example í Array

Array.prototype.inArray = function inArray(value) {
	for (var i = 0; i < this.length; i ++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
}

sampleArray = [1, 2, 3, 4 ,5, 6];
console.log(sampleArray.inArray(1)); //true
console.log(sampleArray.inArray(7)); //false
console.log(sampleArray.inArray("1")); //false:  "1" là string, tất nhiên không === với 1 là number