// pull in external dependencies
var colors = require('colors');
var fs = require('fs');
var repl = require('repl');
var repl_globals = require('./repl_globals');

// build the app object
var app = {};
app.info = {
    version : ' 0.1.0 ',
    repo : 'https://github.com/foundling/node-help',
    node_version: [' ',' '].join(process.version),
}; 
app.header = __dirname + '/marquee.txt';
app.tools = require(__dirname + '/tools');
app.run = function() {

    app.tools.printHeader(app.header, app.info);
    app.repl = repl.start({
                             prompt: '>> ',
                             ignoreUndefined: true
                          }); 

    // set the global functions available in node-help repl 
    // you have to do this once you get a handle from repl.start()
    app.repl.context.clear  =   app.tools.clear;
    app.repl.context.docs   =   repl_globals.docs;
    app.repl.context.help   =   repl_globals.help;
    app.repl.context.i      =   repl_globals.i;
};

module.exports = app;
