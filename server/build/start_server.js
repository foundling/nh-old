'use strict';

var http = require('http'),
    PORT = 3000,
    checkForUpdates = require('./check_for_updates');

var startServer = module.exports = exports = function(docs, versionHash) {

  http.createServer(function(req, res) { 
    console.log('request at %s', req.url);
    console.log(versionHash);

    if (req.url === '/api/nodehelp/version') {
      res.writeHead('200', {'Content-Type':'application/JSON'});
      res.end(JSON.stringify({version: versionHash}));
    } else if (req.url === '/api/nodehelp/docs') {
      res.writeHead('200', {'Content-Type': 'application/JSON'});
      res.end(JSON.stringify({docs: docs}));
    } else {
      res.end();
    }
  }).listen(PORT, function() { 
    console.log('Server Up On Port %d ... ', PORT); 
  });

  checkForUpdates(15000);

  process.on('update', function(updatedDocs, updatedHash) {
    console.log(updatedHash);
    if (updatedHash.length && updatedHash !== versionHash) {
      console.log('Documentation has Been Updated');
      versionHash = updatedHash;
      docs = updatedDocs;
    } else {
      console.log('Documentation Is the Same'); 
    }
  });

};
