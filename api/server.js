var http = require('http');
var PORT = 3000;
var testingString = '{"String":"js string"}'; 

function getDocs(func) {
  func(null, testingString);
}

function buildDocs(f) {
  func(null, testingString);
}

var server = http.createServer(function(req, res){ 
  console.log(req.url);

  var lastUpdate = new Date('Sun Nov 15 2015 18:27:57 GMT-0800 (PST)'); 


  if (req.url === '/api/nodehelp') {
    console.log('test1');
    getDocs(function(err, docs) {
      console.log('test2');
      if (err) throw err;
      if (docs) {
        buildDocs(function(err, docDb) {
          console.log('test3');
          if (err) throw err;
          var data = JSON.stringify(docDb);
          console.log(data);
          res.writeHead('200', {'Content-Type': 'application/JSON'});
          res.end(data);
        });
      }
    });
  }
});

server.listen(PORT, function() { 
  console.log('SERVER UP ON PORT ', PORT);
});
