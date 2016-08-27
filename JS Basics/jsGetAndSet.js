// source: https://www.youtube.com/watch?v=O8wwnhdkPE4 - Object Orient Javascript - Author: Derek Banas
//1st way to deploy get and set
var address = {
	street: "No Stre",
	city: "No City",
	state: "No State",

	getAddress: function() {
		return this.street + ", " + this.city + ", " + this.state + ".";
	},

	setAddress: function(theAddress) {
		var parts = theAddress.toString().split(",");//khai báo 1 mảng parts chứa các address
		this.street = parts[0] || "";
		this.city = parts[1] || "";
		this.state = parts[2] || "";
	}
};

address.setAddress("11 Kim Ma, HaNoi, HN");
console.log(address.getAddress());
console.log(address.city);

//2nd way: hay dùng hơn
function Coordinates() {
	this.latitude = 0;
	this.longitude = 0;
}

Object.__defineGetter__.call(Coordinates.prototype, "getCoords", function(){
	return ("Lat: " + this.latitude + "\n" + "Long: " + this.longitude);
});

Object.__defineSetter__.call(Coordinates.prototype, "setCoords", function(theCoords){
	var parts = theCoords.toString().split(", "); //khai báo array có các trường truyền vào từ theCoords
	this.latitude = parts[0] || "";
	this.longitude = parts[1] || "";
});

var sampleCoords = new Coordinates();
sampleCoords.setCoords = "34.56, 12.98";
console.log(sampleCoords.getCoords);

//3rd way: dùng Object
function Point() {
	this.xPos = 0;
	this.yPos = 0;
}

Object.defineProperty(Point.prototype, "pointPos", {
	get: function() {
		return "X: " + this.xPos + "\nY: " + this.yPos;
	},
	set: function(thePoint) {
		var parts = thePoint.toString().split(', ');
		this.xPos = parts[0] || "";
		this.yPos = parts[1] || "";
	}
});

var testPoint = new Point(); //console.log(testPoint.pointPos);
testPoint.pointPos = "23.34, 45.21";
console.log(testPoint.pointPos);

//4th way: using ECMAScript 5.1
var Circle = function(radius) {
	this._radius = radius;
}

Circle.prototype = {
	set radius(radius) {
		this._radius = radius;
	},

	get radius() {
		return this._radius;
	},

	get area() {
		return Math.PI * this._radius * this._radius;
	}
};

var aCircle = new Circle(8);
aCircle.radius = 12;
console.log("aCircle has radius is " + aCircle.radius + " and its area is " + aCircle.area.toFixed(2));