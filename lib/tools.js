var wrap = function(text, maxWidth, paddingLength, paddingChar) {  

    var padding = buildPadding(paddingLength,paddingChar);
    maxWidth -= padding.length * 2;
    var lines = textToLines(text, maxWidth);
    var formattedText = format(lines, padding, true); 
    return formattedText;

};

var buildPadding = function(paddingLength, padChar) {
    var output = ''; 
    while (paddingLength > 0) {
        output += padChar;
        paddingLength--;
    }

    return output;
};

// takes in lines array
// returns compiled text as single string
var format = function(lines, padding, bothSides) {
    // to implement: if bothsides is true, add padding to both sides
    var outText = '';
    lines.forEach(function(line){
        //var compiledLine = padding + line.join(' ') + padding + '\n';
        var compiledLine = padding + line.join(' ') + padding + '\n';
        outText += compiledLine;
    });
    return outText;
};

// tells you the combined length of a subarray 
var lineLength = function(line) {
    if (line.length === 0) return 0;
    return line.reduce(function(accumulator, word){
        return accumulator + word.length;
    }, 0);   
};

var textToLines = function(text, maxWidth) {

    var words = text.split(' ');
    var lines = [];
    var line = [];
    lines.push(line);

    for (var currentWord = 0, currentLine = 0; currentWord < words.length ; currentWord++) {
        // if current word length plus combined line words length plus line words length - 1 (for spaces) is less than
        // maxWidth
        if ( words[currentWord].length + lineLength(lines[currentLine]) + (lines[currentLine].length -1) < maxWidth) {
            // then push current word to current line
            lines[currentLine].push(words[currentWord]);
        }
        // otherwise, word doesn't fit, so increment lines and push current word to new current line  
        else {
            currentLine++;
            line = [];
            lines.push(line);
            lines[currentLine].push(words[currentWord]);
        }
    }

    return lines;
};

var clear = function () {
  process.stdout.write('\u001B[2J\u001B[0;0f');
};


module.exports = {
    wrap: wrap,
    clear: clear,
    format: format,
    textToLines: textToLines,
    lineLength: lineLength,
    buildPadding: buildPadding,
};
