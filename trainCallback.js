//--- nghịch đảo các số trong mảng---
//style 1
function xulyArray(arr, callback) {
    var resultArr = []; 
    for (var i = 0; i < arr.length; i++) {
        resultArr[i] = callback(arr[i]);
    }
    return resultArr;
}

var arr = [1, 2, 3, 4];
var arrReturned = xulyArray(arr, function(arg) {
									return arg * -1;
								});
console.log(arrReturned);

//style 2
function myCallBack (arr) {
	for(var i = 0; i<arr.length; i++) {
		arr[i] = arr[i] * (-1);
	}
	return arr;
}

function xylyArr(arr, callback) {
	console.log(callback(arr));
}
var sampleArr = [1,23,4,5];
xylyArr(sampleArr, myCallBack);