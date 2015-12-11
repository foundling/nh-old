var docStore = require('./doc_store');
var config = require('./config');

/* NODEHELP REPL GLOBAL FUNCTIONS  */
var docs = function(queryString) {
  return docStore.get(queryString);
};

module.exports = exports = {
  docs: docs,
};
