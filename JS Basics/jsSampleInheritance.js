function Mammal(name){ 
	this.name=name;
	this.offspring=[];
} 
Mammal.prototype.haveABaby=function(){ 
	var newBaby=new Mammal("Baby "+this.name); console.log("debug: " + this.constructor);
	this.offspring.push(newBaby); console.log ("debug: " + newBaby); // [Mammal "Baby Felix"]
	return newBaby;
} 

// Mammal.prototype.haveABaby=function(){ 
// 	var newBaby=new this.constructor("Baby "+this.name); console.log("debug: " + this.constructor);
// 	this.offspring.push(newBaby); console.log ("debug: " + newBaby); //[Cat "Buffer(arg);by Felix"]
// 	return newBaby;
// }

Mammal.prototype.toString=function(){ 
	return '[Mammal "'+this.name+'"]';
} 


Cat.prototype = new Mammal();        // Here's where the inheritance occurs 
console.log("debug: " + Cat.prototype.constructor);
Cat.prototype.constructor=Cat;       // Otherwise instances of Cat would have a constructor of Mammal 
console.log("debug: " + Cat.prototype.constructor);
function Cat(name){ 
	this.name=name;
} 
Cat.prototype.toString=function(){ 
	return '[Cat "'+this.name+'"]';
} 


var someAnimal = new Mammal('Mr. Biggles');
var myPet = new Cat('Felix');
console.log('someAnimal is '+someAnimal);   // results in 'someAnimal is [Mammal "Mr. Biggles"]' 
console.log('myPet is '+myPet);             // results in 'myPet is [Cat "Felix"]' 

myPet.haveABaby();                    // calls a method inherited from Mammal 
console.log(myPet.offspring.length);        // shows that the cat has one baby now 
console.log(myPet.offspring[0]);            // results in '[Mammal "Baby Felix"]' 

/*Every object instance in JS has a property named constructor that points to its parent class. For example, someAnimal.constructor==Mammmal is true. Armed with this knowledge, we can remake the haveABaby() method like this:
Mammal.prototype.haveABaby=function(){ 
	var newBaby=new this.constructor("Baby "+this.name);
	this.offspring.push(newBaby);
	return newBaby;
} 
...
myPet.haveABaby();                    // Same as before: calls the method inherited from Mammal 
alert(myPet.offspring[0]);            // Now results in '[Cat "Baby Felix"]'
*/