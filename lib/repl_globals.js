var tools = require('./tools');
var db = require('./db');
// REPL GLOBALS 

var help = function() {
  
  var toc = [
              '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
              '                 Node Help                  ',
              '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
            ]
            .join('\n');

  console.log(toc);
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
