var tools = require('./tools');
var db = require('./db');
var colors = require('colors');
// REPL GLOBALS 

var help = function() {
  tools.clear();
  var toc = [
              '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
              '               Node Help Usage              ',
              '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
              '',
              'nodehelp commands:',
              '',
              'help() takes you to this screen, but you probably already knew that...',
              'i(obj) will print out some attribute information about a given object.',
              'docs(\'Object\') accepts a string representation of an object or a method or property on an object and will attempt',  
              'to look it up in the documentation database that ships with your version of nodehelp.'  
            ]
            .join('\n');


  process.stdout.write(toc);
};

var i = function(token) {
// help prints out some commonly useful information 
// about a given object

  if (!token) return;

    var details = {
        'type': typeof token,
        'constructor': token.constructor.name,
        'toString': "'" + token.toString() + "'",   
        'valueOf': "'" + token.valueOf()  + "'",
    };

    output_string = '';
    for (var d in details) {
        output_string += (" " + d + ": ").red.bgWhite + " " + details[d] + '\n';
    }
    process.stdout.write(output_string);
};

var docs = function(token) {
// docs looks up the string token in our documentation database, nodehelp.db

    if (!token) return;
    var queryResult = db.find(token);
    tools.printResults(queryResult);
};

module.exports = {
    help: help,
    docs: docs,
    i: i,
};
