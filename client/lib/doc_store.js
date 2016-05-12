var fs = require('fs');

var DB = 'db/db.json';
var localHTMLDocStore = 'db/html_docs';

var DocStore = function(sourceFile) {

  // extract db so that global objects are the top level keys, not the version hash
  var db = JSON.parse(fs.readFileSync(sourceFile).toString());
  var versionKey = Object.keys(db)[0];
  db = db[versionKey];

  var format = function(obj) {
    // replace with actual format function
    console.log(JSON.stringify(obj,null,2));
  };

  var buildResult = function(queryString) {
    var temp,
        rv = {},
        path = queryString.split('.');

    while (path[0]) {
      temp = db[path[0]];
      path.shift();
    }
    rv = temp;
    return rv;
  }; 

  var get = function(queryString) {
    if (!queryString) {
        return;
    }
    if (queryString in db) {
      return format(buildResult(queryString));
    } else {
      return 'No documentation available for ' + queryString;
    }
  };

  return {
    get: get,
  };

};


module.exports = exports = (function() {
  return new DocStore(DB);
}());
