var tools = require('./tools');
var db = require('./db');
var colors = require('colors');
// REPL GLOBALS 

var help = function() {
  tools.clear(); 
  var tocHead = [
              '                                            ',
              '                                            ',
              '                                            ',
              '                                            ',
              '                                            ',
              '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'.cyan,
              ''+'(Nodehelp Usage)'.red.bold.bgWhite +'    '.cyan,
              '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'.cyan,
              '\n',
              'nodehelp commands:'.cyan,
              '\n',
            ].join('\n');
              // crazy things going on in here, wrapping a 
              // a sub array in my tools.wrap func in a very sneaky way
              //
    var tocBody = [

          'help()'.red.bgWhite + ' takes you to this screen.\n',
          'i(obj)'.red.bgWhite + 
          ' prints useful information about a given object.\n',

          'docs("Object")'.red.bgWhite + 
          ' takes a string representation of an object and will\n',
         'attempt to get documentation for it.',
    ].join('');

    var helpBody = tocHead.concat(tocBody);

    console.log(helpBody);
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
