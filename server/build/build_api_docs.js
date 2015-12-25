var fs = require('fs'),
    cheerio = require('cheerio'),
    DOCS_PATH = './build/testdocs',
    DB_FILE = './build/testdb/db.json';

var buildApiDocs = module.exports = exports = function(callback) {
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

      var remaining = files.length;
      console.log("Remaining Documentation Files:");

      files.filter(function(filename){
        return /.*\.nodehelp$/.test(filename);
      }).forEach(function(filename, index, arr){

        fs.readFile(DOCS_PATH + '/' + filename, function(err, html) {
            if (err)  throw err;

            var $ = cheerio.load(html),
                specialCase = specialCases[filename];

            // top-level object categories
            var name,
                syntax,
                description,
                parameters = {},
                children = {},
          
                // these get put into children 
                constructorMethods = {},
                constructorProperties = {},
                prototypeMethods = {},
                prototypeProperties = {};


            name = filename.replace('.nodehelp',''); 
            description = $('#Description').nextUntil(specialCase || 'h2,h3').text(); 
            syntax = $('.syntaxbox').text();

            var maxLength;
            var names = [];
            var descriptions = [];
            var i;

            // Parameters
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
              
              var methodName = $(el).text().replace('()','').trim(),
                  methodDescription = $(el).next().text();

              children[methodName] = {
                  description: methodDescription,
                  childType: 'method'
              };
            });
            
            // constructor properties
            $('#Properties').nextUntil('h2,h3','dl').find('dt').each(function(i,el) {

              var propertyName = $(el).text().replace('()','').trim(),
                  propertyDescription = $(el).next().text();

              children[propertyName] = {
                  description: propertyDescription,
                  childType: 'property',
              };
            });

            //prototype methods 
            $('#Methods_2').next().find('dl').find('dt').each(function(i, el) {

              var methodName = $(el).text(),
                  methodDescription = $(el).next().text().replace('()','');

              children[methodName] = {
                  description: methodDescription,
                  childType: 'method',
              };
            });

            // prototype properties
            $('#Properties_2').next().find('dl').find('dt').each(function(i, el) {

              var propertyName = $(el).text(),
                  propertyDescription = $(el).next().text();

              children[propertyName] = {
                  description : propertyDescription,
                  childType : 'property',
              };
            });

            // start creating objectDB
            objectDB[name] = {
              description: description,
              syntax: syntax,
              parameters: parameters,
              children: children
            };


            remaining -= 1;
            process.stdout.write(" " + remaining + " ");
            if (remaining === 0) {
              fs.writeFile(DB_FILE, JSON.stringify(objectDB, null, 2), function(err) {
                if (err) throw err;
                console.log('\nDocumenation built successfully to %s', DB_FILE);
                console.log('Starting Server ...');
                callback(null, objectDB);
              });
            }
        });
    });
  });
};
