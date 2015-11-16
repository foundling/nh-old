var http = require('http');
var PORT = 3000;
var testingString = '{"String":"js string"}'; 
var generateDocHash = require('./generate_doc_hash');
var buildDocs = require('./build/build_documentation');
var getDocs = require('./build/get_documentation');

/*
function getDocs(func) {
  func(null, testingString);
}

function buildDocs(f) {
  func(null, testingString);
}
*/


var startServer = function(hash) {
  var server = http.createServer(function(req, res){ 
    console.log(req.url);

    var lastUpdate = new Date('Sun Nov 15 2015 18:27:57 GMT-0800 (PST)'); 

    if (req.url === '/api/nodehelp/version') {
      res.writeHead('200', {'Content-Type':'application/JSON'});
      res.end({version: hash.toString()});
    }

    if (req.url === '/api/nodehelp/docs') {
      getDocs(function(err) {
        if (err) throw err;
        buildDocs(function(err, docDb) {
          if (err) throw err;
          res.writeHead('200', {'Content-Type': 'application/JSON'});
          res.end({docs: data});
          console.log(JSON.stringify(docDb));
        });
      });
    }
  });

  server.listen(PORT, function() { 
    console.log('SERVER UP ON PORT ', PORT);
  });
};

generateDocHash('build/testdocs', startServer);
