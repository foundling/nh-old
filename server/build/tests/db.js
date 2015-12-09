var crypto = require('crypto');
var hash = crypto.createHash('sha1');
hash.setEncoding('hex');

var obj = {
  'zza': 9,
  '129': 'a' 
};

hash
