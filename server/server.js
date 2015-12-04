var async = require('async');

var getRawDocs = require('./build/get_raw_docs');
var genDocHash = require('./build/generate_doc_hash.js');
var buildApiDocs = require('./build/build_api_docs');
var startServer = require('./build/start_server');


async.waterfall([getRawDocs, genDocHash, buildApiDocs], startServer);

