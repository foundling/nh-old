var http = require('http');
var PORT = 3000;
var testingString = '{"String":"js string"}'; 

var startServer = function(docs, versionHash) {
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
        buildDocs(function(err, docs) {
          if (err) throw err;
          res.writeHead('200', {'Content-Type': 'application/JSON'});
          res.end({docs: data});
          console.log(JSON.stringify(docs));
        });
      });
    }
  });

  server.listen(PORT, function() { 
    console.log('SERVER UP ON PORT ', PORT);
  });
};

module.exports = exports = startServer;
