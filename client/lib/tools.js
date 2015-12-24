var fs = require('fs');
var colors = require('colors');
var configManager = require('./config_manager.js');

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
        // if current word length plus combined line words length plus line 
        // words length - 1 (for spaces) is less than
        // maxWidth
        if ( words[currentWord].length + lineLength(lines[currentLine]) + (lines[currentLine].length -1) < 
            maxWidth) {
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

var printHeader = function() {
    var marquee = configManager.get('header'); 
    var help_string = 
    [    
         marquee,
         '* run help() for nodehelp usage information   ',
         '                                              ',
         'Node-Help Version: ' + configManager.get('nodeHelpVersion').magenta.bgWhite,
         'Your node Version: '.cyan + (' ' + configManager.get('nodeVersion') + ' ').magenta.bgWhite,
         'Source Repo:' + configManager.get('sourceRepo'),
         'Docs Last Updated:' + configManager.get('lastUpdate').magenta.bgWhite,
    ]
    .join('\n');

    help_string = colors.cyan(help_string);
    clear();
    console.log(help_string);

};

function printResults(object){

    var details = {
      description:  object['description'],
      isNative:     object['isNative'],
      methods:      Object.keys(object['children']).filter(function(key, index) {
        return object['children'][key]['childType'] === 'method'; 
      }),
      properties:   Object.keys(object['children']).filter(function(key, index) {
        return object['children'][key]['childType'] === 'property'; 
      }),
    }; 

    for(var key in details){
      if (key === 'isNative') {
        console.log(
            key.red.bgWhite,
            ": ",
            details[key]); 
      }
      else if (key === 'methods' || key === 'properties') {
        console.log(key.red.bgWhite);
        for (var i in details[key]) console.log(
            '  ',
            details[key][i]);
      }
      else {
        console.log(key.red.bgWhite);
        console.log(wrap(details[key],80,2,' '));
      }
    }
}

var notifyUser = function(msg) {
  if (msg) console.log(msg.cyan.bgWhite);
};

module.exports = {
    wrap: wrap,
    clear: clear,
    format: format,
    textToLines: textToLines,
    lineLength: lineLength,
    buildPadding: buildPadding,
    printHeader: printHeader, 
    printResults: printResults,
    notifyUser: notifyUser
};
