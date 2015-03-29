
// String to Function.
module.exports.s2f = function (value) {
	if (value && typeof value === "string" && value.substr(0,8) == "function") {
		var startBody = value.indexOf('{') + 1;
		var endBody = value.lastIndexOf('}');
		var startArgs = value.indexOf('(') + 1;
		var endArgs = value.indexOf(')');

		return new Function(value.substring(startArgs, endArgs)
			, value.substring(startBody, endBody));
	} else {
		throw new TypeError('Expected a String representation of a Function');
	}
}

// Return eval-able string of fn applied to args.
module.exports.apply2s = function apply2s(fn, args) {
	return "(" + fn.toString() + ').apply(null,' + JSON.stringify(args) + ');'
}
