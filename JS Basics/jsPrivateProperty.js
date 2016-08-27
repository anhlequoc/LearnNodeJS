// source: https://www.youtube.com/watch?v=O8wwnhdkPE4 - Object Orient Javascript - Author: Derek Banas
function SecretCode() {
	var secretNumber = 12; //protected value, can not be accessed outside of this constructor function
	this.guessNum = function(num) {
		if (num < secretNumber ) {
			return "Higher";
		} else if (num > secretNumber) {
			return "Lower";
		} else return "You guessed it!";
	};
}
var secret = new SecretCode();
console.log(secret.guessNum(45)); //"Lower"
console.log(secret.guessNum(9)); //"Higher"
console.log(secret.guessNum(12)); //"You guessed it!"

console.log("Secret number is " + secret.secretNumber); //undefine - can not access private property
SecretCode.prototype.getSecretNumber = function() {
	return this.secretNumber;
}
console.log("Get secret number by prototype: " + secret.getSecretNumber()); //undefine - even does not work through prototype