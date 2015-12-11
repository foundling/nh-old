var configManager = require('./config_manager');
var tools = require('./tools');
var replGlobals = require('./repl_globals');



var startRepl = function(userNotifications) {

  tools.printHeader();
  tools.notifyUser(userNotifications);
  var repl = require('repl').start({
    prompt: 'node-help > ',
    ignoreUndefined: true
  });
  repl.context.docs = replGlobals.docs;

}; 

module.exports = exports = startRepl;
