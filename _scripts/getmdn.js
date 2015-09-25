var fs = require('fs');

var f = fs.readFileSync('mdn.json');

var docs = JSON.parse(f.toString());

console.log(docs.Function.name);
