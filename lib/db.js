// pull in dependencies
var fs = require('fs');
var ns = require('node-serialize');

// db 'class'
var DB = function() {

  var dbFileContent = fs.readFileSync(__dirname + '/../db/' + 'mdn.db.verify');
  var docs = ns.unserialize(dbFileContent.toString());

  // this is our only db query method, it takes a reference object name as a string.
  // examples in volving the Array function:
  //
  // Array
  // Array.prototype
  // Array.prototype.slice
  // Array.isArray
  // 
  // javascript is sort of difficult to get definitive answers out of, so we took the 'easier' road
  // and make you supply the string
 
  this.find = function(token) {
    var tokens = token.split('.');

    // recurse until we've found what we're looking for
    // then print out the values at that level
    for (var i = 0, target = docs; i < tokens.length; i++ ) {

      // if this is the target node, 
      // get the attributes values that you want.
      if (i === tokens.length - 1) {
        target = {
          name: tokens[i],
          isNative: (target[tokens[i]]['isNative'] === true) ? 'yes' : 'no',
          description: target[tokens[i]]['description'] || {},
          children: target[tokens[i]]['children'] || {},
        };
      }
      // otherwise, travel further into the tree
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
