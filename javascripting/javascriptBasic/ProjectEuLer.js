//Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
var sum = 0;
for(var i = 0; i<1000; i++){
	if (i%3 == 0 || i%5 == 0){
		sum = sum + i;
	}
}
console.log(sum);

//Problem 2
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of th

var fiboArr = new Array();
fiboArr[0] = 1;
fiboArr[1] = 2;

var sum = 0;
function fibonaciNumber (i) {
	if (i==0) {
		fibonaciNumber(0) = 1;		
	} else if (i==1) {
		fibonaciNumber(1) = 2;		
	} else {
		return fibonaciNumber(i-1) + fibonaciNumber(i-2);
	}
}	
console.log(fibonaciNumber(4));

i = 4; fibonaciNumber(4) = fibonaciNumber(3) + fibonaciNumber(2)
						= fibonaciNumber(2) + fibonaciNumber(1) + fibonaciNumber(1) + fibonaciNumber(0)
						= fibonaciNumber(1) + fibonaciNumber(0) + fibonaciNumber(1) + fibonaciNumber(1) + fibonaciNumber(0)
						= 2 + 1 + 2 + 2 + 1 = 8
