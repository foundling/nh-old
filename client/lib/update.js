var request = require('request');
var startRepl = require('./start_repl');
var nconf = require('./nconf');

nconf.use('file', { file: './config.json' });
nconf.load();

var update = function(startRepl) {
  // future method should be:
  // request('http:localhost:5000/api/nodehelp').pipe(fs.createwriteStream('build/docs/new_database.json'); 
  startRepl();  
};   

module.exports = exports = update;