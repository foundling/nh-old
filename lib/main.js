// In terms of testing, the query - response thing is pretty important.  
// define attributes of the program and pull stuff in
var app_version = '0.1.0';
var tools = require(__dirname + '/tools');
var colors = require('colors');
var fs = require('fs');

// print the header, an IIFE so it happens right now
var printHeader = (function() {
    
    var marquee = fs.readFileSync(__dirname + '/marquee.txt').toString();
    var help_string = 
    [    
         marquee,
         '                                              ',
         'node-help: ' + app_version.magenta.bgWhite,
         'your node version: '.cyan + process.version.magenta.bgWhite,
         'help(obj) ==>      node help on object',
         'source repo: github.com/foundling/node-help  ',
    ]
    .join('\n');

    help_string = colors.cyan(help_string);
    tools.clear();
    console.log(help_string);

}());


// require the repl and run .start. pass it a dict of options
var r = require('repl').start({
                                    prompt: '>> ',
                                    ignoreUndefined: true
                              }); 

// then require the db, bind it to r.context. 
r.context._db = require('./db');

// clear's terminal by sending a special escape code. will probably break on other os.
r.context.clear = tools.clear;

// i is a shortcut for help
r.context.i = r.context.help;

// the main entrypoint to our program help.
r.context.help = function(token) {
    var text_block = lookup(token);
    process.stdout.write(text_block.bgWhite);
};


// looks up the word you pass into help
// the WAY this is done is pretty rediculous, and should become more systematic. 
function lookup(token) {

    var rv;
    var nativeDocs;

    // Check for Node objects

    // Native object checking Fallback 
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

// denest really means query the db object for the queried object type in help()
// run it through the formatter and print it out.

function denest(results) {
    // Input: the Native or Node db/files after they've been unserialized 
    // unserialized objects. 
    // Output: a single string.

    var description = '\n' +
                      'Description:'.magenta +
                      '\n' +
                      '\n' +
                      results['description'].black;

    var methods = '';

    for (var method in results['methods']) {
        methods +=
                   '\n' +
                    results['methods'][method]['name'].magenta +
                   '\n\t' + 
                   results['methods'][method]['description'].black;
    }
    return [description,methods].join('\n');
}
