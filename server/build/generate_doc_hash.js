var fs = require('fs'),
    crypto = require('crypto'),
    DOCS_PATH = 'build/testdocs';

var generateDocHash = module.exports = exports = function(dbObj, callback) {
  var jsonArray = [];
  var sha1sum;
  var sortedDbKeys = Object.keys(dbObj).sort();

  sortedDbKeys.forEach(function(key) {
    jsonArray.push(dbObj[key]);
  });

  hash = crypto.createHash('sha1');
  hash.setEncoding('hex');
  hash.write(JSON.stringify(jsonArray));
  hash.end();
  sha1sum = hash.read();
  
  callback(dbObj, sha1sum);
};
