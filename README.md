# [function-serialization-tools](https://www.npmjs.com/package/function-serialization-tools)

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Node.js Version][node-image]][node-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][dependencies-image]][dependencies-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[![NPM][npm-image]][npm-url]

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

[npm-version-image]: https://img.shields.io/npm/v/function-serialization-tools.svg
[npm-downloads-image]: https://img.shields.io/npm/dm/function-serialization-tools.svg
[npm-image]: https://nodei.co/npm/function-serialization-tools.png?downloads=true&downloadRank=true&stars=true
[npm-url]: https://npmjs.org/package/function-serialization-tools
[travis-image]: https://img.shields.io/travis/llambda/function-serialization-tools/master.svg
[travis-url]: https://travis-ci.org/llambda/function-serialization-tools
[dependencies-image]: https://david-dm.org/llambda/function-serialization-tools.svg?style=flat
[dependencies-url]: https://david-dm.org/llambda/function-serialization-tools
[coveralls-image]: https://img.shields.io/coveralls/llambda/function-serialization-tools/master.svg
[coveralls-url]: https://coveralls.io/r/llambda/function-serialization-tools?branch=master
[node-image]: https://img.shields.io/node/v/function-serialization-tools.svg
[node-url]: http://nodejs.org/download/
[gitter-join-chat-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-channel-url]: https://gitter.im/llambda/function-serialization-tools
[express-session-url]: https://github.com/expressjs/session
[io-url]: https://iojs.org
