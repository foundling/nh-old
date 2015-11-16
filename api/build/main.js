#!/usr/bin/node

var getDocs = require('./get_documentation');
var buildDocs = require('./build_documentation');

getDocs(buildDocs);
