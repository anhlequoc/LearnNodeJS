var Emitter = require('./emitter');
var emtr = new Emitter();
//add 1st function
emtr.on('greet', function(){
    console.log('Somewhere, someone said hello!');
});

//add 2nd function -> have 2 listeners
emtr.on('greet', function(){
    console.log('A greeting occurred!');
});
emtr.emit('greet');

emtr.on('ha ha', function(){
    console.log('someone is laughing');
});
emtr.emit('ha ha');