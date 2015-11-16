/*
 * FLAT FILE DATABASE
 */

var DBFILE = 'db/db.json';
var DocStore = require('./lib/doc_store');
var docStore = new DocStore(DBFILE);

/*
 * REPL FUNCTIONS
 */

var docs = function(queryString) {
  return docStore.get(queryString);
};


/*
 * REPL INITIALIZATION
 */

var repl = require('repl').start({
  prompt: 'node-help > ',
  ignoreUndefined: true
});

repl.context.docs = docs;
