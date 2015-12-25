#!/usr/bin/node 

var fs = require('fs'),
    db = fs.readFileSync('db.json').toString(),
    jsonDb = JSON.parse(db);


console.log(JSON.stringify(jsonDb,null,2));
