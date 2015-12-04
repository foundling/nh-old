var http = require('http');
var PORT = 3000;

var serverUp = function() { 
  console.log('SERVER UP ON PORT', PORT);
};

var startServer = module.exports = exports = function(err, docs, versionHash) {
  console.log('Starting Server ...');
  http.createServer(function(req, res){ 
    console.log(req.url);

    var lastUpdate = new Date('Sun Nov 15 2015 18:27:57 GMT-0800 (PST)'); 

    if (req.url === '/api/nodehelp/version') {
      res.writeHead('200', {'Content-Type':'application/JSON'});
      res.end(JSON.stringify({version: versionHash}));
    } else if (req.url === '/api/nodehelp/docs') {
      res.writeHead('200', {'Content-Type': 'application/JSON'});
      res.end(JSON.stringify({docs: docs}));
    } else {
      res.end();
    }
  }).listen(PORT, serverUp);
};
