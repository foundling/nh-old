var colors = require('colors');
var  _version = '0.1.0';
var init = (function() {
    
    var help_string = 
    [    '--------------------------------------',
         '\n',
         'node version: '.green + process.version.cyan,
         _version, 
         'help(obj) ==> node help on object',
         '\n',
         '--------------------------------------',
    ]
    .join('\n');

    help_string = colors.cyan(help_string);
    console.log(help_string);
}());


var r = require('repl').start({prompt: '>> ', ignoreUndefined: true}); 
var db = r.context._db = require('./db');

r.context.help = function(token) {
    var text_block = lookup(token);
    process.stdout.write(text_block.bgWhite);
};

r.context.i = r.context.help;

function lookup(token) {

    var nativeDocs;
    var rv;

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
    }

    return rv;
}

function denest(results) {
    var description = 'Description:\n'.magenta + results['description'];
    var methods = '';

    for (var method in results['methods']) {
        methods += results['methods'][method]['name'].magenta +
                   '\n' +
                   results['methods'][method]['description'] +
                   '\n';
    }
    return [description,methods].join('\n');
}
