var english = require('./english');
var spanish = require('./spanish');

console.log(english, spanish);
module.exports = {
    eng: english,
    spa: spanish
};
console.log(module.exports);