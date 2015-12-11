var nconf = require('nconf');

var ConfigManager = function(configFile) {
  this._nconf = nconf;
  this._nconf.use('file',{file: configFile});
  this._nconf.load();

};

ConfigManager.prototype.get = function(value) {
  return this._nconf.get(value); 
};

ConfigManager.prototype.set = function(key, value) {
  return this._nconf.set(key, value); 
};

ConfigManager.prototype.save = function() {
  this._nconf.save(); 
};

module.exports = exports = (function(configFile) {
  return new ConfigManager(configFile);
}('./config.json'));
