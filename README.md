# function-serialization-tools
serialization and deserialization function to string and back

```
var assert = require('assert');
var fntools = require('function-serialization-tools');

function mult(x, y) {
    return x*y;
}

var funAsString = mult.toString();

var y = fntools.s2f(funAsString);

assert.equal(y(3,7), 3*7);
assert.equal(3*7, eval( fntools.apply2s(y, [3, 7]) ));

```
