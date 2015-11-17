var fs = require('fs');
var cheerio = require('cheerio');
var crypto = require('crypto');
var hash = crypto.createHash('sha1');
hash.setEncoding('hex');
var http = require('http');
var request = require('request');

var DOMAIN = 'https://developer.mozilla.org';
var DOCS_PATH = 'build/testdocs';
var MDN_GLOBALS_PATH = '/en-US/docs/Web/JavaScript/Reference/Global_Objects';
var DB_FILE = 'build/testdb/db.json';
var TESTING = false;
var PORT = 3000;

var startServer = function(docs, versionHash) {
  console.log('startServer');
  var server = http.createServer(function(req, res){ 
    console.log(req.url);

    var lastUpdate = new Date('Sun Nov 15 2015 18:27:57 GMT-0800 (PST)'); 

    if (req.url === '/api/nodehelp/version') {
      res.writeHead('200', {'Content-Type':'application/JSON'});
      res.end(JSON.stringify({version: versionHash}));
    }

    if (req.url === '/api/nodehelp/docs') {
      res.writeHead('200', {'Content-Type': 'application/JSON'});
      res.end(JSON.stringify({docs: docs}));
    }
  });

  server.listen(PORT, function() { 
    console.log('SERVER UP ON PORT ', PORT);
  });

};

var buildApiDocs = function(hash, callback) {
  console.log('buildApiDocs',callback);
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
            console.log("remaining: %d",remaining);
            if (remaining === 0) {
              fs.writeFile(DB_FILE, JSON.stringify(objectDB, null, 2), function(err) {
                if (err) throw err;
                console.log('docs built successfully');
                console.log('starting server ...');
                callback(objectDB,hash);
              });
            }
        });
        // then write objectDB to file as json
    });
  });
};

// no args
var generateDocHash = function(callback) {
  console.log('genDocHash');
  // string cache
  var src = '';

  // read dir, get filenames
  fs.readdir(DOCS_PATH, function(err, files){
    if (err) throw err;

    // sort filenames
    files.sort();

    // set a max read count
    var remaining = files.length;

    // for each file
    for (var i = 0; i < files.length; i++) {
      var fileContent = fs.readFile(DOCS_PATH + '/' + files[i], function(err, fileContent) {
        if (err) throw err;
        src += fileContent;
        remaining -= 1;
        if (remaining === 0) {
            console.log('Read all docs! Generating a hash ...');
            hash.write(src);
            hash.end();
            var sha1sum = hash.read();
            console.log('hash: %s',sha1sum);
            callback(sha1sum, startServer);
        } 
      });
    }
  });
   
};



var getRawDocs = function(next){
  console.log('getRawDocs');
  // for each global object, get its href, write it to a new file
  request(DOMAIN + MDN_GLOBALS_PATH, function(err, response, html) {
    if (err) throw err;
    var $ = cheerio.load(html);
    var linksToGlobals = $('#wikiArticle ul a').map(function(index, element) {
      return $(this).attr('href');
    }).get();

    // for each link, join it with the base DOMAIN and get that html
    // then write to file
    linksToGlobals.map(function(relativeLink, index) {
      request(DOMAIN + relativeLink, function(err, response, html) {
        if (err) throw err;
        var objectName = relativeLink.slice(relativeLink.lastIndexOf('/') + 1);
        fs.writeFile(DOCS_PATH + '/' + objectName, html, function(err) {
          if (err) throw err;
          if (index === linksToGlobals.length - 1) {
            console.log(index + ' topics written to ' + DOCS_PATH);
            next(buildApiDocs);
          }  
        });
      }); 
    });
  });
};

var run = function() {
    getRawDocs(generateDocHash);
};

module.exports = exports = {
  run: run
};
