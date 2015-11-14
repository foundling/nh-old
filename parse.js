var fs = require('fs');
var cheerio = require('cheerio');
var objFormat = require('./lib/obj_format');
var DOCSPATH = 'docs';
var DBFILE = 'db/db.json';

var testing = true;
var objectDB = {};

var specialCases = {
  // need to build an object with fields for each top-level category 
    isNaN: {
        description: 'h2#Examples',  
    },
};

// we have cached MDN html JS Reference files, so parse each one, and add to global 
fs.readdir(DOCSPATH, function(err, files){
    if (err)  throw err;
   
    // override for testing single topics
    if (testing) files = [
      'RegExp',
      'Array',
      'isNaN',
      'Error'
    ]; 

    files.forEach(function(filename){
      fs.readFile(DOCSPATH + '/' + filename, function(err, html) {
          if (err)  throw err;

          var $ = cheerio.load(html),
              specialCase = specialCases[filename];

          // top-level object categories
          var name,
              syntax,
              description,
              parameters = {},
              constructorMethods = {},
              constructorProperties = {},
              prototypeMethods = {},
              prototypeProperties = {};


          name = filename; 
          description = $('#Description').nextUntil(specialCase || 'h2,h3').text(); 
          syntax = $('.syntaxbox').text();

          var maxLength;
          var names = [];
          var descriptions = [];
          var i;

          $('#Parameters').next().find('dt code').each(function(i,el){
            names.push($(el).text());
          }.bind(this));

          $('#Parameters').next().find('dd').each(function(i,el){
            descriptions.push($(el).text());
          }.bind(this));

          for (i = 0; i < names.length; i++){
            parameters[names[i]] = descriptions[i];
          }


          // constructor methods
          $('#Methods').nextUntil('h2,h3','dl').find('dt').each(function(i,el) {
            var methodName = $(el).text(),
                methodDescription = $(el).next().text();
            constructorMethods[methodName] = methodDescription;
          });
          
          // constructor properties
          $('#Properties').nextUntil('h2,h3','dl').find('dt').each(function(i,el) {
            var propertyName = $(el).text(),
                propertyDescription = $(el).next().text();
            constructorProperties[propertyName] = propertyDescription;
          });

          //prototype methods 
          $('#Methods_2').next().find('dl').find('dt').each(function(i, el) {
            var methodName = $(el).text(),
                methodDescription = $(el).next().text();
            prototypeMethods[methodName] = methodDescription;
          });

          // prototype properties
          $('#Properties_2').next().find('dl').find('dt').each(function(i, el) {
            var propertyName = $(el).text(),
                propertyDescription = $(el).next().text();
            prototypeProperties[propertyName] = propertyDescription;
          });

          // add everything to the objectDB
          objectDB[filename] = {
            description: description,
            syntax: syntax,
            parameters: parameters,
            prototypeProperties: prototypeProperties,
            prototypeMethods: prototypeMethods,
            constructorProperties: constructorProperties,
            constructorMethods: constructorMethods,
          };

          // then write objectDB to file as json
          fs.writeFile(DBFILE, JSON.stringify(objectDB, null, 2), function(err) {
            if (err) throw err;
          });
      });
  });
});
