const request = require('request'),
  cheerio = require('cheerio'),
  fs = require('fs'),
  DOCS_PATH = 'build/testdocs', 
  MDN_DOMAIN = 'https://developer.mozilla.org',
  MDN_GLOBALS_PATH = '/en-US/docs/Web/JavaScript/Reference/Global_Objects';


var getRawDocs = module.exports = exports = function(callback){

  
  if (process.env.TESTING) {
    console.log('TESTING: Getting HTML Documentation from cached doc store.');
    return callback(null);
  }

  console.log('Getting HTML Documentation from MDN ...');
  // for each global object, get its href, write it to a new file
  request(MDN_DOMAIN + MDN_GLOBALS_PATH, function(err, response, html) {
    if (err) throw err;
    var $ = cheerio.load(html);
    var linksToGlobals = $('#wikiArticle ul a').map(function(index, element) {
      return $(this).attr('href');
    }).get();

    // for each link, join it with the base MDN_DOMAIN and get that html
    // then write to file
    linksToGlobals.forEach(function(relativeLink, index) {
      request(MDN_DOMAIN + relativeLink, function(err, response, html) {
        if (err) throw err;

        var objectName = relativeLink.slice(relativeLink.lastIndexOf('/') + 1);
        fs.writeFile(DOCS_PATH + '/' + objectName + '.nodehelp', html, function(err) {
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
