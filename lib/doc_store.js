var fs = require('fs');

var DocStore = function(sourceFile) {

  var db = JSON.parse(fs.readFileSync(sourceFile).toString());

  var get = function(queryString) {
    if (queryString in db) {
      return db[queryString];
    } else {
      return 'No Documentation available for ' + queryString;
    }
  };

  return {
    get: get,
  };

};

module.exports = exports = DocStore;
