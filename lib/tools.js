var wrap = function(text, maxWidth) {  
    var lines = wordsToLines(text);
    var formattedText = format(lines); 
    return formattedText;
};

// takes in lines array
// returns compiled text as single string
var format = function(lines, padding) {
    var outText = '';
    lines.forEach(function(line){
        var compiledLine = padding + line.join('') + padding;
        outText += compiledLine;
    });
    return outText;
};

// line is an array of lines
var lineLength = function(line) {
    if (line.length === 0) return 0;
    return line.reduce(function(accumulator, word){
        return accumulator + word.length;
    }, 0);   
};

var textToLines = function(text) {
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
    clear: clear
};
