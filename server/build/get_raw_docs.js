var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var DOCS_PATH = 'build/testdocs'; 
var MDN_DOMAIN = 'https://developer.mozilla.org';
var MDN_GLOBALS_PATH = '/en-US/docs/Web/JavaScript/Reference/Global_Objects';

var getRawDocs = module.exports = exports = function(callback){
  console.log('getRawDocs');
  // for each global object, get its href, write it to a new file
  request(MDN_DOMAIN + MDN_GLOBALS_PATH, function(err, response, html) {
    if (err) throw err;
    var $ = cheerio.load(html);
    var linksToGlobals = $('#wikiArticle ul a').map(function(index, element) {
      return $(this).attr('href');
    }).get();

    // for each link, join it with the base MDN_DOMAIN and get that html
    // then write to file
    linksToGlobals.map(function(relativeLink, index) {
      request(MDN_DOMAIN + relativeLink, function(err, response, html) {
        if (err) throw err;
        var objectName = relativeLink.slice(relativeLink.lastIndexOf('/') + 1);
        fs.writeFile(DOCS_PATH + '/' + objectName, html, function(err) {
          if (err) throw err;
          if (index === linksToGlobals.length - 1) {
            console.log(index + ' topics written to ' + DOCS_PATH);
            callback(null);
          }  
        });
      }); 
    });
  });
};
