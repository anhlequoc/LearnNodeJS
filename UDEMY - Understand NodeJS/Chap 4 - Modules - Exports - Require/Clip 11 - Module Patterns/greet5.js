var greeting = "Hello World!!!!";
function greet() {
    console.log(greeting);
}
module.exports = {
    greet: greet //là hàm greet ở trên
}
// cách viết này nhằm tăng tính security, chỉ export function greet() còn ko export variable greeting
// function greet() là public, còn variable greeting chỉ là private
// cái này gọi là REVEALING MODULE PATTERN
/* REVEALING MODULE PATTERN: exposing only the properties and methods you want via a returned object (module.exports)
--> It's a very common and clean way to structure and protect code within modules
 */