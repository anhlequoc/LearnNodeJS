//khai báo function có callback
function greet(callback) {
    console.log('Hello');
    var person = {
        name: "anh le"
    };
    callback(person);
}

greet(function(data){
    console.log("callback function is invoked!");
    console.log(data);
})

greet(function(data){
    console.log("another callback function is invoked!");
    console.log(data.name);
})