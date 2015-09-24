var lineLength = require('./tools').lineLength;
var textToLines = require('./tools').textToLines;
var format = require('./tools').format;
var wrap = require('./tools').wrap; // glue code
var buildPadding  = require('./tools').buildPadding;

var text = 'The Object constructor creates an object wrapper for the given value. If the value is null or undefined, it will create and return an empty object, otherwise, it will return an object of a Type that corresponds to the given value. If the value is an object already, it will return the value.';

var maxWidth = 80;
var paddingLength = 2;
var paddingChar = '@';


//var lines = textToLines(text, maxWidth - 2*'  '.length);
//var output = format(lines, '  ');

var padding = buildPadding(4,'@');
maxWidth -= padding.length * 2;
var lines = textToLines(text, maxWidth);

//var output = wrap(text, maxWidth, paddingLength, paddingChar);
//console.log(output);

// helpers
// 
function ll(line) {
    // get combinjed length of array of words
    return line.reduce(function(a,b) {
        return a + b.length; 
    },0);
}


console.log(padding);
console.log(maxWidth);
console.log(ll(lines[0]));
console.log(ll(lines[1]));
console.log(ll(lines[2]));
console.log(ll(lines[3]));
