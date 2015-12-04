var fs = require('fs');
var cheerio = require('cheerio');
var DOCS_PATH = './build/testdocs';
var TESTING = false;
var DB_FILE = './build/testdb/db.json';

var buildApiDocs = module.exports = exports = function(hash, callback) {
  console.log('Building Api Docs ... ');
  var objectDB = {};
  var specialCases = {
      isNaN: {
          description: 'h2#Examples',  
      },
  };


  // we have cached MDN html JS Reference files, so parse each one, and add to global 
  fs.readdir(DOCS_PATH, function(err, files){
      if (err)  throw err;
     
      // override for testing single topics
      if (TESTING) files = [
        'RegExp',
        'Array',
        'isNaN',
        'Error'
      ]; 

      var remaining = files.length;
      files.forEach(function(filename, index, arr){

        fs.readFile(DOCS_PATH + '/' + filename, function(err, html) {
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
              constructorMethods[methodName.replace('()','').trim()] = methodDescription;
            });
            
            // constructor properties
            $('#Properties').nextUntil('h2,h3','dl').find('dt').each(function(i,el) {
              var propertyName = $(el).text(),
                  propertyDescription = $(el).next().text();
              constructorProperties[propertyName.replace('()','').trim()] = propertyDescription;
            });

            //prototype methods 
            $('#Methods_2').next().find('dl').find('dt').each(function(i, el) {
              var methodName = $(el).text(),
                  methodDescription = $(el).next().text().replace('()','');
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

            remaining -= 1;
            console.log("Remaining Documentation Files: %d ... ",remaining);
            if (remaining === 0) {
              fs.writeFile(DB_FILE, JSON.stringify(objectDB, null, 2), function(err) {
                if (err) throw err;
                console.log('Documenation built successfully');
                console.log('Starting Server ...');
                callback(null, objectDB, hash);
              });
            }
        });
    });
  });
};