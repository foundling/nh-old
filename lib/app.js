var colors = require('colors');
var fs = require('fs');
var repl = require('repl');

var app = {};
app.info = {
    version : '0.1.0',
    repo : 'https://github.com/foundling/node-help'
}; 
app.header = __dirname + '/marquee.txt';
app.tools = require(__dirname + '/tools');
app.db = require('./db');
app.run = function() {

    app.tools.printHeader(app.header, app.info);
    app.repl = repl.start({
                             prompt: '>> ',
                             ignoreUndefined: true
                          }); 

    app.repl.context._db = app.db;
    app.repl.context.clear = app.tools.clear;
    app.repl.context.help = help;
    app.repl.context.i = app.repl.context.help;
};

var help = function(token) {
    var text_block = lookup(token);
    process.stdout.write(text_block.bgWhite);
};

var lookup = function(token) {

    var rv;
    var nativeDocs;

    switch(typeof token) {

        case 'function':    nativeDocs = app.repl.context._db['Native.db']['Function'];
                            rv = deNest(nativeDocs);
                            break;

        case 'object':      nativeDocs = app.repl.context._db['Native.db']['Object'];
                            rv = deNest(nativeDocs);
                            break;

        case 'string':      nativeDocs = app.repl.context._db['Native.db']['String'];
                            rv = deNest(nativeDocs);
                            break;

        case 'default':     break;
    }

    return rv;
};

var deNest = function(results) {

    var description = '\n' +
                      'Description:'.magenta +
                      '\n' +
                      app.tools.wrap(results['description'], 80, 2, ' ').black;

    var methods = '';

    for (var method in results['methods']) {
        methods +=
                   '\n' +
                    results['methods'][method]['name'].magenta +
                   '\n\t' + 
                   results['methods'][method]['description'].black;
    }
    return [description,methods].join('\n');
};

module.exports = app;
