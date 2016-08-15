function AdditivePersistence(num) {
  var count = 0;
  var sum = 0;

  while (num >= 10) {      
      var numbers = num.toString().split("").map(Number);      
      for (var i = 0; i < numbers.length; i++){          
          sum += numbers[i];          
      }
      num = sum;
      count++;
      sum = 0; //reset sum !important to prevent unlimit while loop
  }
  return count;
}
console.log(AdditivePersistence(298)); //should be 3, returns 4
console.log(AdditivePersistence(11)); //should be 1, returns 
console.log(AdditivePersistence(1999)); //should be 3, returns 4
console.log(AdditivePersistence(2718)); //should be 2, returns 4