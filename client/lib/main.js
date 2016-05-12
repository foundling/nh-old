/*
var request = require('request');
var configManager = require('./config_manager');
var tools = require('./tools');
*/
var update = require('./update');
var startRepl = require('./start_repl');


/* REPL INITIALIZATION */
module.exports = exports = function() {
  update(startRepl);
};
