var fs = require('fs');
var crypto = require('crypto');
var hash = crypto.createHash('sha1');
hash.setEncoding('hex');
var DOCS_PATH = 'build/testdocs';

var generateDocHash = module.exports = exports = function(callback) {
  console.log('genDocHash');
  // string cache
  var src = '';

  // read dir, get filenames
  fs.readdir(DOCS_PATH, function(err, files){
    if (err) throw err;

    // sort filenames
    files.sort();

    // set a max read count
    var remaining = files.length;

    // for each file
    for (var i = 0; i < files.length; i++) {
      var fileContent = fs.readFile(DOCS_PATH + '/' + files[i], function(err, fileContent) {
        if (err) throw err;
        src += fileContent;
        remaining -= 1;
        if (remaining === 0) {
            console.log('Read all docs! Generating a hash ...');
            hash.write(src);
            hash.end();
            var sha1sum = hash.read();
            console.log('hash: %s',sha1sum);
            callback(null, sha1sum);
        } 
      });
    }
  });
   
};
