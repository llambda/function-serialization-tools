var assert = require('assert');
var fntools = require('./index.js');

function mult(x, y) {
	return x*y;
}

var funAsString = mult.toString();

var y = fntools.s2f(funAsString);

assert.equal(y(3,7), 3*7);
assert.equal(3*7, eval( fntools.apply2s(y, [3, 7]) ));

assert.throws(
	function () {
		fntools.s2f('asdf')
	}, TypeError);