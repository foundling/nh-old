var request = require('request');
var fs = require('fs');
var configManager = require('./config_manager');
var currentDocsVersion = configManager.get('docsVersion');
var versionUrl = configManager.get('versionUrl');
var docsUrl = configManager.get('docsUrl');
var startRepl = require('./start_repl');
var logger = require('./logger');
var errHandler = require('./err_handler');

var update = function(startRepl) {

  var userNotification;

  request(versionUrl, function(err, response, body){ 
    if (err) {
      if (err.errno === 'ECONNREFUSED') {
        logger.log(err.errno + 'Could not connect to the address. Are you sure you are connected to the internet?' );
      }
      else throw err;
    }

    if (body) {

      var newDocsVersion = JSON.parse(body).version;

      // If changes have happened to the JS docs since the last use of node-help
      // update information 
      if (newDocsVersion && newDocsVersion !== currentDocsVersion) {
        configManager.set('docsVersion',newDocsVersion);
        configManager.save();
        userNotification = 'Node Help Documentation Updated!';
        request(docsUrl, function(err, response, body) {
          if (err) throw err;
          var newDocs = JSON.parse(body).docs;
          var newDocsObj = {};
          newDocsObj[newDocsVersion] = newDocs;
          fs.writeFile(configManager.get('dbPath'), JSON.stringify(newDocsObj), function(err) {
            if (err) throw err; 
          });
        });
      }    
    } 

    startRepl(userNotification);  
  });
};   

module.exports = exports = update;
