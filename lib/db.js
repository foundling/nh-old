var fs = require('fs');
var ns = require('node-serialize');

module.exports = (function() {

    var docs = {};
    fs.readdirSync(__dirname + '/../db')
        .filter(function(filename){
            // filename must end with '.db'
            return /\.db$/.test(filename);  
        })
        .forEach(function(filename) {
                var content = fs.readFileSync(__dirname + '/../db/' + filename);
                docs['nodehelp'] = ns.unserialize(content.toString());
        });
    return docs;
}());
