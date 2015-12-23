// use this module to write to log file, for example when the system tries to update but is offline.
var fs = require('fs');
var _LOG = './../logs/node-help.client.log';

var Logger = function(log) {
  if (log) {
    _LOG = log;
  }
};

Logger.prototype.log = function(msg) {

  var line = [
                new Date(), 
                msg
             ].join(' - ');

  fs.appendFile(_LOG, line, function(err) {
    if (err && err.code === 'ENOENT') {
      console.log("LOGGER ERROR: that directory doesn't exist!");
    }
  }); 
};

module.exports = exports = (function() {
  return new Logger();
}());
