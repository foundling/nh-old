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
debugger;
app.db = require('./db')['nodehelp'];
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

    var details = {
        'type': typeof token,
        'constructor': token.constructor.name,
        'toString': "'" + token.toString() + "'",   
        'valueOf': "'" + token.valueOf()  + "'",
    };

    output_string = '';
    for (var d in details) {
        output_string += (" " + d + ": ").red.bgWhite + " " + details[d] + '\n';
    }
    process.stdout.write(output_string);
};

var docs = function(token) {
    if (!token) return;
    var text_block = lookup(token);
    console.log(text_block);
};

var lookup = function(token) {

    var parts;
    var doc_text;
    var results;

    if (!token) return 'invalid';
    else  parts = token.split('.');

    if (parts.length === 1) {
        if (app.db[parts[0]]) {
            results = {
                namespace_degree:   1,
                origin:             parts[0],
                description:        app.db[parts[0]]['description'],  
                methods:            app.db[parts[0]]['methods'],
                properties:         app.db[parts[0]]['properties'],
            };
        }
    }

    else if (parts.length === 2) {
        // if both parts are non-empty strings
        if (parts[0] === '' || parts[1] === '') return 'invalid input';
        results = {
            namespace_degree:   2,
            origin:               parts[0],
            method:               parts[2],
        };
    }

    else if (parts.length === 3) {
        // if both parts are non-empty strings
        if (parts[0] === '' || parts[1] === '' || parts[2] === '') return 'invalid input';
        results = {
            namespace_degree:     3,
            origin:               parts[0],
            method:               parts[2],
        };
    }

    else if (parts.length === 4) {
        return '4 Namespaces are not yet supported.';
    }

    return stringify(results); 
};

var stringify = function(queryResult) {

    var ns_routes = {
         1: ns1,
         2: ns2,
         3: ns3,
    };
    
    return ns_routes[queryResult['namespace_degree']](queryResult);

};

function ns1(queryResult) {

    // unpacks one level of sub-objects. 
    var unpack = function(obj) {
        return Object.keys(obj).reduce(function(accumulator, key) {
           return   [
                        accumulator,
                        (' ' + obj[key]['name'] + ' ').red.bgWhite,
                        '\n',
                        (' ' + obj[key]['description'] + ' ').black,
                        '\n',
                        '\n',
                    ].join('');
        },'');    
    };

    return  [   '\n',
                ' NAME: '.red.bold.bgWhite + ' ' + queryResult['origin'],
                '\n',
                '\n',
                ' DESCRIPTION: '.red.bgWhite,
                '\n',
                queryResult['description'],
                '\n',
                '\n',
                ' METHODS: '.red.bold.bgWhite,
                '\n', 
                '\n', 
                unpack(queryResult['methods']), 
                ' PROPERTIES: '.red.bold.bgWhite,
                '\n',
                '\n',
                unpack(queryResult['properties']), 
                '\n'
            ]
            .join('');
}

function ns2(queryResult) {
    
}

function ns3(queryResult) {
    
}

var stringify2 = function(dbResults) {
    
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
