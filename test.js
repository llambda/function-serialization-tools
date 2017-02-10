const test = require('tape');
const fntools = require('./index.js');

test('string to function works', function (t) {
	t.plan(1);

	function mult(x, y) {
		return x*y;
	}

	const funAsString = mult.toString();
	const y = fntools.s2f(funAsString);

	t.equal(y(3,7), 3*7);
});

test('apply to string works', function (t) {
	t.plan(1);

	function mult(x, y) {
		return x*y;
	}

	const funAsString = mult.toString();
	const y = fntools.s2f(funAsString);

	t.equal(3*7, eval( fntools.apply2s(y, [3, 7]) ));
});

test('invalid function string throws', function (t) {

	t.plan(1);
	
	t.throws(
		function () {
			fntools.s2f('asdf')
		}, TypeError);		
})
