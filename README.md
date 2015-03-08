# [function-serialization-tools](https://www.npmjs.com/package/function-serialization-tools)

Got a Function.toString()? Turn it back into a Function. 

```
var assert = require('assert');
var fntools = require('function-serialization-tools');

function mult(x, y) {
    return x*y;
}

var funAsString = mult.toString();

var y = fntools.s2f(funAsString);
assert.equal(y(3,7), 3*7);

```

Got a function? Need to turn it into a string suitable for eval (or runInContext)?

```
assert.equal(3*7, eval( fntools.apply2s(y, [3, 7]) ));

```
