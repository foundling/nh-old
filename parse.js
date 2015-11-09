var fs = require('fs');
var cheerio = require('cheerio');
var objFormat = require('./lib/obj_format');
var DOCSPATH = 'docs';
var DBFILE = 'db/db.json';

var testing = true;
var objectDB = {};

var specialCases = {
  // need to build an object with fields for each global object
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

          var $ = cheerio.load(html);
          var specialCase = specialCases[filename];
          var shortDescription = $('#Description').nextUntil(specialCase || 'h2,h3').text(); 
          var syntax = $('.syntaxbox').text();

          var constructorProperties = {};
          $('#Properties').nextUntil('h2,h3','dl').find('dt').each(function(i,el) {
            var propertyName = $(el).text();
            var propertyDescription = $(el).next().text();
            constructorProperties[propertyName] = propertyDescription;
          });

          var constructorMethods = {};
          $('#Methods').nextUntil('h2,h3','dl').find('dt').each(function(i,el) {
            var methodName = $(el).text();
            var methodDescription = $(el).next().text();
            constructorMethods[methodName] = methodDescription;
          });

          // different structure than the constructor info
          var prototypeProperties = {};
          $('#Properties_2').next().find('dl').find('dt').each(function(i, el) {
            var propertyName = $(el).text();
            var propertyDescription = $(el).next().text();
            prototypeProperties[propertyName] = propertyDescription;
          });

          var prototypeMethods = {};
          $('#Methods_2').next().find('dl').find('dt').each(function(i, el) {
            var methodName = $(el).text();
            var methodDescription = $(el).next().text();
            prototypeMethods[methodName] = methodDescription;
          });

          // add all of this parsed to the objectDB 
          objectDB[filename] = {
            shortDescription: shortDescription,
            syntax: syntax,
            prototypeProperties: prototypeProperties,
            prototypeMethods: prototypeMethods,
            constructorProperties: constructorProperties,
            constructorMethods: constructorMethods,
          };

          // then write it out as json
          fs.writeFile(DBFILE, JSON.stringify(objectDB, null, 2), function(err) {
            if (err) throw err;
          });
      });
  });
});
