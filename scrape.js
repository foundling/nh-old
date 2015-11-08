var cheerio = require('cheerio');
var request = require('request');
var base_url = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects';

// get global objects
request(base_url, function(err, response, html) {
  if (err) throw err;
  var $ = cheerio.load(html);
  var globalObjects = $('a code').map(function(index, element) {
    return $(this).text(); 
  }).get();
  console.log(globalObjects);

});
