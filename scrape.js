var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var baseUrl = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects';
var cachedHtml = fs.readFileSync('cached_base_url.html').toString();
var objectDB = {};

// get list of global objects
request(baseUrl, function(err, response, html) {
  if (err) throw err;
  var $ = cheerio.load(html);
  var globalObjects = $('a code').map(function(index, element) {
    console.log($(this).text());
    return $(this).text(); 
  }).get();

  // add each string to objectDB as top level key for object name
  globalObjects.forEach(function(value){
    objectDB[value] = null;
  }.bind(this));

  // use each object to scrape the url for that object  
  globalObjects.map(function(object, index, array) {
    request(baseUrl + '/' + object, function(err, res, html) {
      if (err) throw err; 
      var $ = cheerio.load(html);
      var description = $('#wikiArticle p').first().text();
      var syntax = $('.syntaxbox').text();
      console.log('URL: \n', baseUrl + '/' + object, '\n');
      console.log('~~OBJECT~~:', object, '\n');
      console.log('Description: \n', description, '\n');
      console.log('Syntax:\n', syntax, '\n');
    });
  });
});
