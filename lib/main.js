var update = require('./update');
var tools = require('./tools');
var APPINFO = {
  nodeVersion:      process.version,
  nodeHelpVersion:  '0.2.0',
  sourceRepo:       'https://github.com/foundling/node-help',
}; 

/* FLAT FILE DATABASE */
var DBFILE    = 'db/db.json';
var DocStore  = require('./doc_store');
var docStore  = new DocStore(DBFILE);

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
  //request('http:localhost:5000/api/nodehelp').pipe(fs.createwriteStream('build/docs/new_database.json'); 
  request('https://alexramsdell.com/api/nodehelp', function(err, response, newDb) {
    if (err) throw err;

    if (newDb) {
      updateDb(function() {
        run();
      });
    } else {
      run();
    }
  });
};   

module.exports = exports = update;
