var lineLength = require('./tools').lineLength;
var textToLines = require('./tools').textToLines;
var format = require('./tools').format;
var wrap = require('./tools').wrap; // glue code

var text = 'The Object constructor creates an object wrapper for the given value. If the value is null or undefined, it will create and return an empty object, otherwise, it will return an object of a Type that corresponds to the given value. If the value is an object already, it will return the value.';

var maxWidth = 80;
var padding = '  ';

//console.log(wrap(process.argv[2], parseInt(process.argv[3])));

//var lines = textToLines(text, maxWidth - 2*'  '.length);
//var output = format(lines, '  ');

var output = wrap(text, maxWidth, padding);

console.log(output);
