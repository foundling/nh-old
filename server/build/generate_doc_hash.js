var fs = require('fs'),
    crypto = require('crypto'),
    hash = crypto.createHash('sha1'),
    DOCS_PATH = 'build/testdocs';

hash.setEncoding('hex');

var generateDocHash = module.exports = exports = function(dbObj, callback) {
  var jsonArray = [];
  var sha1sum;
  var sortedDbKeys = Object.keys(dbObj).sort();

  sortedDbKeys.forEach(function(key) {
    jsonArray.push(dbObj[key]);
  });

  hash.write(JSON.stringify(jsonArray));
  hash.end();
  sha1sum = hash.read();
  
  callback(dbObj, sha1sum);
};
