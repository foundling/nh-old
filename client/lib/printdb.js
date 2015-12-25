#!/usr/bin/node 

function usage() {
  console.log('please pass a dbfile as an argument. exiting ...');
  process.exit(1);
}

var dbFile = process.argv[2] || usage();
var objectToInspect = process.argv[3];
console.log(process.argv[3]);
console.log('~~~~~~~~~~~~~~');

var fs = require('fs'),
    jsonDb = fs.readFileSync('db.json').toString(),
    db = JSON.parse(jsonDb);

if (objectToInspect) {
  var key = Object.keys(db)[0];
  db = db[key];
  process.stdout.write(JSON.stringify(db[objectToInspect],null,2) + '\n');
} else {
  process.stdout.write(JSON.stringify(db,null,2) + '\n');
}

