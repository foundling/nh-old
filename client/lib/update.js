var request = require('request');
var fs = require('fs');
var startRepl = require('./start_repl');
var configManager = require('./config_manager');
var currentDocsVersion = configManager.get('docsVersion');
var versionUrl = configManager.get('versionUrl');
var docsUrl = configManager.get('docsUrl');

var update = function(startRepl) {
  var userNotification;

  request(versionUrl, function(err, response, body){ 
    if (err) throw err;

    var newDocsVersion = JSON.parse(body).version;
    if (newDocsVersion !== currentDocsVersion) {
      configManager.set('docsVersion',newDocsVersion);
      configManager.save();
      userNotification = 'Node Help Documentation Updated!';
      request(docsUrl, function(err, response, body) {
         if (err) throw err;
         var newDocs = JSON.parse(body).docs;
         var newDocsObj = {newDocsVersion: newDocs};
        fs.writeFile(configManager.get('dbPath'), JSON.stringify(newDocsObj), function(err) {
          if (err) throw err; 
        });
      });
    }    

    startRepl(userNotification);  
  });
};   

module.exports = exports = update;
