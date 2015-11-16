var update = require('./update');
var tools = require('./tools');
var APPINFO = {
  nodeVersion:      process.version,
  nodeHelpVersion:  '0.2.0',
  sourceRepo:       'https://github.com/foundling/node-help',
}; 

/* FLAT FILE DATABASE */
var DBFILE = 'db/db.json';
var DocStore = require('./doc_store');
var docStore = new DocStore(DBFILE);

/* REPL FUNCTIONS */
var docs = function(queryString) {
  return docStore.get(queryString);
};


/* REPL INITIALIZATION */

var run = function() {

  tools.printHeader(APPINFO);
  var repl = require('repl').start({
    prompt: 'node-help > ',
    ignoreUndefined: true
  });
  repl.context.docs = docs;

}; 

var update = function() {
  console.log('checking for updates...');
  setTimeout(function() {
    run();
  },2000);
};   

module.exports = exports = update;
