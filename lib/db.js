var fs = require('fs');
var ns = require('node-serialize');

var DB = function() {

  var dbFileContent = fs.readFileSync(__dirname + '/../db/' + 'test.db');
  var docs = ns.unserialize(dbFileContent.toString());

  this.find = function(token) {
    var tokens = token.split('.');

    // recurse until we've found what we're looking for
    // then print out values at that level
    for (var i = 0, target = docs; i < tokens.length; i++ ) {
      if (i === tokens.length - 1) {
        target = {
          name: tokens[i],
          isNative: (target[tokens[i]]['isNative'] === true) ? 'yes' : 'no',
          description: target[tokens[i]]['description'] || {},
          children: target[tokens[i]]['children'] || {},
        };
      }
      else {
        target = target[tokens[i]]['children'];
      }
    }
    return target;
  };
};

module.exports = (function(){
  return new DB(__dirname + '/../db');
}());
