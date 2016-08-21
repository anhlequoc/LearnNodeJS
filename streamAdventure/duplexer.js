//Chua hieu lam nen tam thoi copy solution
var spawn = require('child_process').spawn;
var duplexer = require('duplexer2'); console.log(typeof(duplexer));

module.exports = function(cmd, args){
	var ps = spawn(cmd, args);
	return duplexer(ps.stdin, ps.stdout);
};