var fs = require('fs');
var ns = require('node-serialize');

module.exports = (function() {

    debugger;
    var docs = {};
    fs.readdirSync(__dirname + '/../db')
        .filter(function(filename){
        debugger;
            // filename must end with '.db'
            return /\.db$/.test(filename);  
        })
        .forEach(function(filename) {
        debugger;
                var content = fs.readFileSync(__dirname + '/../db/' + filename);
                docs[filename] = ns.unserialize(content.toString());
        });
    return docs;
}());
