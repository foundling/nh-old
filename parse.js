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
   
    // for testing single topics
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
              parameters,
              description,
              constructorMethods = {},
              constructorProperties = {},
              prototypeMethods = {},
              prototypeProperties = {};


          name = filename; 
          description = $('#Description').nextUntil(specialCase || 'h2,h3').text(); 
          syntax = $('.syntaxbox').text();
          parameters = $('#Parameters').next().find('dt').each(function(i,el) {
            // dt = list item name, dd = list item's accompanying caption text
            //
            // note:
            // this func should really grab a dt and a dd inside of a dl, and for any nested ones, e.g. RegExp 'flags',
            // it should grab dt and a dd nested inside of the 'flags' dd.
          });

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
