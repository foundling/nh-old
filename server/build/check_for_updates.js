'use strict';

var async = require('async'),
    getRawDocs = require('./get_raw_docs'),
    buildApiDocs = require('./build_api_docs'),
    generateDocHash = require('./generate_doc_hash'),
    updateInterval = 1000 * 60 * 60 * 24 * 7; // once per week

var checkForUpdate = module.exports = exports = function(customInterval) {
  console.log('Timer started, next update check in %d days', (customInterval || updateInterval)/(1000*60*60*24));
  setInterval(function() {
    async.waterfall([getRawDocs, buildApiDocs, generateDocHash], function(newDocs, newVersionHash) {
      process.emit('update', newDocs, newVersionHash);
    });
  }, customInterval || updateInterval);
};
