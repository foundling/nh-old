var http = require('http');
var PORT = 3000;

var server = http.createServer(function(req, res){ 

  var lastFetch = new Date('Sun Nov 15 2015 18:27:57 GMT-0800 (PST)'); 

  console.log(req.url);
});

server.listen(PORT, function() {
  console.log('SERVER UP ON PORT ', PORT);
});
