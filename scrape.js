#!/bin/env node

var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var base_url = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects';

fs.readFile('global_objects.html', function(err, html) {
  if (err) throw err;
  var $ = cheerio.load(html);
  var kws = $('code').map(function(i, el) {
    return $(this).text();
  }).get();
  console.log(kws);
});


