
var format = function(obj) {
  console.log(obj);
};

var docs = function(obj) {
  if ('nodehelp' in obj) {
    context.format(obj.nodehelp);
  } 
  else {
    console.log('No information available');
  }
};

var repl = require('repl').start({
  prompt: 'node-help > ',
  ignoreUndefined: true
});

repl.context.format = format;
repl.context.docs = docs;
