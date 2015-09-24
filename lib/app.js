var colors = require('colors');
var fs = require('fs');
var repl = require('repl');

var app = {};
app.info = {
    version : ' 0.1.0 ',
    repo : 'https://github.com/foundling/node-help',
    node_version: [' ',' '].join(process.version),
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
    app.repl.context.docs = docs;
    app.repl.context.i = app.repl.context.help;
};

var help = function(token) {
};

var docs = function(token) {
    var text_block = lookup(token);
    process.stdout.write(text_block);
};

var lookup = function(token) {

    var type;
    var table;
     
    // method check
    if (token.name === 'Function') {
        type = 'Function';
        table = 'Native.db';
    }
    else if (token.name === 'Object') {
        type = 'Object';
        table = 'Native.db';
    }
    else if (token.name === 'String') {
        type = 'String';
        table = 'Native.db';
    }
    else if (token.name === 'Array') {
        type = 'Array';     
        table = 'Native.db';
    }
    else if (token.name === 'Data') {
        type = 'Date';     
        table = 'Native.db';
    }
    else if (token.name === 'RegExp') {
        type = 'RegExp'; 
        table = 'Native.db';
    }
    else if (token.name === 'Error') {
        type = 'Error'; 
        table = 'Native.db';
    }
    else if (token.name === 'Buffer') {
        type = 'Buffer'; 
        table = 'Node.db';
    }
    else if (token.name === 'Stream') {
        type = 'Stream'; 
        table = 'Node.db';
    }
    else if (token.name === 'Script') {
        type = 'Script'; 
        table = 'Node.db';
    }
    else if (token.Url.name === 'Url') {
        type = 'url'; 
        table = 'Node.db';
    }

    try {
        dbResults = {
            name: type,
            description: app.db[table][type]['description'],
            methods: app.db[table][type]['methods'],
            properties: app.db[table][type]['properties'], 
        };
    }
    catch(e) {
        if (e instanceof TypeError) dbResults = '';
    }

    return stringify(dbResults);
};

var stringify = function(dbResults) {
    
    // unpacks the nested properites or methods objects 
    var unpack = function(obj) {
        return Object.keys(obj).reduce(function(accumulator, key) {
           return   [
                        accumulator,
                        obj[key]['name'].red.bgWhite,
                        '\n',
                        obj[key]['description'].black,
                        '\n',
                        '\n',
                    ].join('');
        },'');    
    };

    return [
        'name: '.red.bold.bgWhite,
        '\n',
        dbResults['name'].black,
        '\n',
        '\n',
        'description: '.red.bold.bgWhite,
        '\n',
        dbResults['description'].black,
        '\n',
        '\n',
        'methods: '.red.bold.bgWhite,
        '\n',
        '\n',
        unpack(dbResults['methods']),
        'properties: '.red.bold.bgWhite,
        '\n',
        '\n',
        unpack(dbResults['properties']),
    ].join('');
};

module.exports = app;
