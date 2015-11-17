// get list of docs, sort them, read them, combine them into a single string
// hash the string

var fs = require('fs');
var crypto = require('crypto');
var hash = crypto.createHash('sha1');
hash.setEncoding('hex');
var DOCSPATH = 'build/testdocs';

var generateDocHash = function(callback) {
  // string cache
  var src = '';

  // read dir, get filenames
  fs.readdir(DOCSPATH, function(err, files){
    if (err) throw err;

    // sort filenames
    files.sort();

    // set a max read count
    var remaining = files.length;

    // for each file
    for (var i = 0; i < files.length; i++) {
      var fileContent = fs.readFile(DOCSPATH + '/' + files[i], function(err, fileContent) {
        if (err) throw err;
        src += fileContent;
        remaining -= 1;
        console.log('remaining documents: %d', remaining);
        if (remaining === 0) {
            console.log('Read all docs! Generating a hash ...');
            //console.log('SRC: %s',src);
            hash.write(src);
            hash.end();
            var sha1sum = hash.read();
            callback(sha1sum);
        } 
      });
    }
  });
   
};

module.exports = exports = generateDocHash;
