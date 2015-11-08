var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');
var base_url = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects';
var OUTFILE = 'cached_base_url.html';

// get list of global objects
request(base_url, function(err, response, html) {
  if (err) throw err;
  fs.writeFile(OUTFILE, html, function(err) {
    if (err) throw err;
    console.log('document written to', OUTFILE);
  });
});
