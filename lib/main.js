var colors = require('colors');
var app = {};
app.version = '0.1.0';

(function init() {
    var help_string =   [   
                            '--------------------------------------',
                            '\n',
                            'node version: ' + process.version,
                            app.version, 
                            'help(obj) ==> node help on object',
                            '\n',
                            '--------------------------------------',
                        ]
                        .join('\n');
    help_string = colors.bgMagenta(help_string);

    console.log(help_string);
}());

var r = require('repl').start({prompt: '>> '}); 
var serialize = require('node-serialize');
var data_obj = require('./data_obj');
var capitalize = require('./text_helpers').capitalize;




r.context.help = function(token) {
    var text_block = lookup(token);
    console.log(text_block);
};

r.context.i = r.context.help;

function lookup(token) {
    var data = (typeof token === 'object') ? formatData(data_obj) : 'not_implemented';
    console.log(data);
}

function formatData(obj){
    var result = '';
    for (var i in obj) {
       result += [  
                    colors.red(capitalize(i) + ':'),
                    '\n',
                    colors.cyan(obj[i]),
                    '\n'
                 ]
                 .join('');
    }
    return result;
}

