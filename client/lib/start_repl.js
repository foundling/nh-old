var config = require('./config');
var tools = require('./tools');
var replGlobals = require('./repl_globals');



var startRepl = function() {

  tools.printHeader(config);
  var repl = require('repl').start({
    prompt: 'node-help > ',
    ignoreUndefined: true
  });
  repl.context.docs = replGlobals.docs;

}; 

module.exports = exports = startRepl;
