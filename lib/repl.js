var fs = require('fs');
var dbFile = fs.readFileSync('../db/db.json').toString();
var db = JSON.parse(dbFile);

var format = function(obj) {
  console.log(obj, null, 2);
};

var docs = function(queryString) {
  var rv;
  if (queryString in db) {
    rv = db[queryString];
  } else {
    rv = 'Documentation not available for ' + queryString;
  }
  return rv;
};

var repl = require('repl').start({
  prompt: 'node-help > ',
  ignoreUndefined: true
});

repl.context.format = format;
repl.context.docs = docs;
repl.context.alex = 'alex!';
