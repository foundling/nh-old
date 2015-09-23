var wrap = function(text, maxWidth, padding) {  
    var lines = textToLines(text, maxWidth);
    var formattedText = format(lines, padding); 
    return formattedText;
};

// takes in lines array
// returns compiled text as single string
var format = function(lines, padding) {
    var outText = '';
    lines.forEach(function(line){
        debugger;
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
        // if linelength plus current word length not greater than line
        if ( words[currentWord].length + lineLength(lines[currentLine]) <= maxWidth - 4) {
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
    lineLength: lineLength
};
