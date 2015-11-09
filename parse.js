var cheerio = require('cheerio');
var fs = require('fs');
var objectDB = {};
var DOCSPATH = 'docs';
var objFormat = require('./lib/obj_format');
var testing = true;

// we have files, so parse each one, and add to global 
fs.readdir(DOCSPATH, function(err, files){
  if (err)  throw err;
 
  // for testing single topics
  if (testing) files = [
    'RegExp',
    'Array',
  ]; 

  files.forEach(function(filename){
    fs.readFile(DOCSPATH + '/' + filename, function(err, html) {
        if (err)  throw err;

        var $ = cheerio.load(html);
        var description = $('#Description').nextUntil('h2,h3').text(); 
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
          description: description,
          syntax: syntax,
          prototypeProperties: prototypeProperties,
          prototypeMethods: prototypeMethods,
          constructorProperties: constructorProperties,
          constructorMethods: constructorMethods,
        };

        // then write it out as json
        fs.writeFile('db.json', JSON.stringify(objectDB, null, 2), function(err) {
          if (err) throw err;
        });
    });
  });
});
