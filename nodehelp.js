var r = require('repl').start({prompt: '> '});

function help(token) { 
    doc_object = lookup(token);
    pretty_print(doc_object);
    return typeof token; 
}

r.context.help = help;
r.context.i = help;

