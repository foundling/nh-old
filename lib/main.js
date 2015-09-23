var colors = require('colors');
var  _version = '0.1.0';
var fs = require('fs');
var clear = function () {
  process.stdout.write('\u001B[2J\u001B[0;0f');
};
var wrap = require('./wrap');

var printHeader = (function() {
    
    var marquee = fs.readFileSync(__dirname + '/marquee.txt').toString();
    var help_string = 
    [    
         marquee,
         'node-help:' + _version.magenta.bgWhite,
         'your node version: '.cyan + process.version.magenta.bgWhite,
         'help(obj) ==>      node help on object',
         'source repo: github.com/foundling/node-help  ',
    ]
    .join('\n');

    help_string = colors.cyan(help_string);
    clear();
    console.log(help_string);

}());


var r = require('repl').start({prompt: '>> ', ignoreUndefined: true}); 
var db = r.context._db = require('./db');

r.context.help = function(token) {
    var text_block = lookup(token);
    process.stdout.write(text_block.bgWhite);
};
r.context.clear = clear;

r.context.i = r.context.help;

function lookup(token) {

    var nativeDocs;
    var rv;

    if (token === 'url')
    if (token.name === 'Buffer') {
        nativedocs = r.context._db['Node']['UTF'];
    }

    switch(typeof token) {

        case 'function':    nativeDocs = r.context._db['Native']['Function'];
                            rv = denest(nativeDocs);
                            break;

        case 'object':      nativeDocs = r.context._db['Native']['Object'];
                            rv = denest(nativeDocs);
                            break;

        case 'string':      nativeDocs = r.context._db['Native']['String'];
                            rv = denest(nativeDocs);
                            break;

        case 'default':     break;
    }

    return rv;
}

function denest(results) {

    /*
     *  params: nested 'database' object  
     *  
     */

    var description = '\n' +
                      'Description:'.magenta +
                      '\n' +
                      '\n' +
                      wrap(results['description'].black, 80);

    var methods = '';

    for (var method in results['methods']) {
        methods +='\n' +  results['methods'][method]['name'].magenta +
                   '\n\t' + results['methods'][method]['description'].black;
    }
    return [description,methods].join('\n');
}
