#!/bin/env node

var fs = require('fs');
var request = require('request');
var HTMLScraper = require('./html_scraper');  
var base_url = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects';

htmlScraper = new HTMLScraper();

fs.readFile('global_objects.html', function(err, html) {

  if (err) throw err;
  var $ = cheerio.load(html);
  var kws = $('code').map(function(i, el) {
    return $(this).text();
  }).get();
  console.log(kws);
});


