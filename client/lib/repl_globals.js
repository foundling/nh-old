var docStore = require('./doc_store');
var configManager = require('./config_manager');

/* NODEHELP REPL GLOBAL FUNCTIONS  */
var docs = function(queryString) {
  return docStore.get(queryString);
};

module.exports = exports = {
  docs: docs,
};
