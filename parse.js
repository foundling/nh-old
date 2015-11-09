var cheerio = require('cheerio');
var fs = require('fs');
var objectDB = {};
var DOCSPATH = 'docs';

// we have files, so parse each one, and add to global 
fs.readdir(DOCSPATH, function(err, files){
  if (err)  throw err;
  files.forEach(function(filename){
    fs.readFile(DOCSPATH + '/' + filename, function(err, html) {
      if (err)  throw err;
      var $ = cheerio.load(html);
      var description = $('#Description').nextUntil(':not(p)').text(); 
      var syntax = $('.syntaxbox').text();
      objectDB[filename] = {
        description: description,
        syntax: syntax
      };
      console.log(
        'Topic:',
        filename, 
        "\n",
        'Syntax: ',
        objectDB[filename]['syntax'], 
        '\n'
        //'Description: ',
        //objectDB[filename]['description'], 
        //'\n'
      );
    });
  });
});
