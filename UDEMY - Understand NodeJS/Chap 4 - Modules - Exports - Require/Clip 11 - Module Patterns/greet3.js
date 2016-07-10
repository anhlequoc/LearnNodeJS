//sử dụng function Constructor
function Greetr(){
    this.greeting = "Hello World!!";
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();//module.exports là một BRAND NEW object của Greetr();