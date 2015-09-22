// build a pseudoDb from our serialized docs
var fs = require('fs');
var ns = require('node-serialize');

module.exports = (function() {
    var docs = {};
    fs.readdir(__dirname + '/../db', function(err, filenames) {
        if (err) throw err;
        filenames.forEach(function(filename, index, files_array){
            fs.readFile(__dirname + '/../db/' + filename,function(err,content){
                if (err) throw err;
                docs[filename] = ns.unserialize(content.toString());
                console.log(JSON.stringify(docs, undefined, 2));
                return docs;
            });
        });
    });
}());
