var cheerio = require('cheerio');
var fs = require('fs');
var objectDB = {};
var DOCSPATH = 'docs';
var objFormat = require('./lib/o_format');
var testing = true;

// we have files, so parse each one, and add to global 
fs.readdir(DOCSPATH, function(err, files){
  if (err)  throw err;
 
  // for testing single topics
  if (testing) files = [
    'RegExp',
  ]; 

  files.forEach(function(filename){
    fs.readFile(DOCSPATH + '/' + filename, function(err, html) {
        if (err)  throw err;

        var $ = cheerio.load(html);
        var description = $('#Description').nextUntil('h2,h3').text(); 
        var syntax = $('.syntaxbox').text();
        var properties = {};
        $('#Properties').nextUntil('h2,h3','dl').find('dt').each(function(i,el) {
          var propertyName = $(el).text();
          var description = $(el).next().text();
          properties[propertyName] = description;
        }.bind(this));

        // add all of this parsed to the objectDB 
        objectDB[filename] = {
          description: description,
          syntax: syntax,
          properties: properties,
        };

        // then write it out as json
        fs.writeFile('db.json', JSON.stringify(objectDB, null, 2), function(err) {
          if (err) throw err;
        });
    });
  });
});
