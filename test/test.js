var cheerio = require('cheerio');
var request = require('request');
var url = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval';

// get list of global objects
request(url, function(err, response, html) {
  if (err) throw err;
  var $ = cheerio.load(html);
});
