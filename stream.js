var fs = require('fs'); 

fs.readFile('stream', function(err, data) {
  data = JSON.parse(data.toString());
  console.log(Object.keys(data));
  console.dir(data.modules[0].desc);
});
