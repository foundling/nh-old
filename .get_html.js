#!/bin/env node

var fs = require('fs');
var $ = require('cheerio');
var request = require('request');
var base_url = 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects';


request(base_url, function(error, response, html) {
  if (!error && response.statusCode == 200) {
    fs.writeFile('global_objects.html', html, function(err) {
      if (err) throw err;
      console.log('wrote file!');
    });
  }
});
