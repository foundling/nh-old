var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var domain = 'https://developer.mozilla.org';
var globalsPage = '/en-US/docs/Web/JavaScript/Reference/Global_Objects';
var DOCSPATH = 'docs';

// for each global object, get its href, write it to a new file
request(domain + globalsPage, function(err, response, html) {
  if (err) throw err;
  var $ = cheerio.load(html);
  var linksToGlobals = $('#wikiArticle ul a').map(function(index, element) {
    return $(this).attr('href');
  }).get();
  //console.log(linksToGlobals);

  // for each link, join it with the base domain and get that html
  // then write to file
  linksToGlobals.map(function(relativeLink) {
    request(domain + relativeLink, function(err, response, html) {
      if (err) throw err;
      var objectName = relativeLink.slice(relativeLink.lastIndexOf('/') + 1);
      fs.writeFile(DOCSPATH + '/' + objectName, html, function(err) {
        if (err) throw err;
        else console.log('wrote html to ', objectName, ' file.');
      });
    }); 
  });
});
