const async = require('async'),
      getRawDocs = require('./build/get_raw_docs'),
      buildApiDocs = require('./build/build_api_docs'),
      genDocHash = require('./build/generate_doc_hash.js'),
      startServer = require('./build/start_server');

async.waterfall([getRawDocs, buildApiDocs, genDocHash], startServer);

