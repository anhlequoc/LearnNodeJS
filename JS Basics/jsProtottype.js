function Animal() {
	this.name = "Animal";
	//this.sound = "He he";
	this.toString = function(){
		return "My name is " + this.name;
	}
}

function Canine(){
	this.name = "Canine";
}

function Wolf(){
	this.name = "Wolf";
	// this.toString = function() {
	// 	return "My name is " + this.name + this.name;
	// }
}

Canine.prototype = new Animal();
Wolf.prototype = new Animal();

//remember that ofter overwrting a prototype, its constructor will point to the main object, so you have to reset the constructor for it
Canine.prototype.constructor = Canine;
//Wolf.prototype.constructor = Wolf;

var articWolf = new Wolf(); console.log(articWolf.constructor);
console.log(articWolf.toString()); //access constructor của Wolf không có -> tìm ở Animal

//Add more attribute to Animal.prototype
Animal.prototype.sound = "Grrrrr";
Animal.prototype.getSound = function() {
	return this.name + " says " + this.sound;
}

Canine.prototype.sound = "woof";
//Wolf.prototype.sound = "wolf woof";

//trinh tu tim kiem this.sound cua getSound(): tim o Wolf truoc -> tim o prototype cua Wolf (la Animal) -> tim o prototype cua Animal (la Animal.prototype)
console.log("Sound of " + articWolf.name + " :" + articWolf.getSound());