var fs = require('fs');

var DB = 'db/db.json';
var localHTMLDocStore = 'db/html_docs';

var DocStore = function(sourceFile) {

  var db = JSON.parse(fs.readFileSync(sourceFile).toString());
  var versionKey = Object.keys(db)[0];
  db = db[versionKey];

  var get = function(queryString) {
    if (queryString in db) return db[queryString];
    else return 'No Documentation available for ' + queryString;
  };

  return {
    get: get,
  };

};


module.exports = exports = (function() {
  return new DocStore(DB);
}());
