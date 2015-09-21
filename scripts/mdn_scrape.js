var cheerio = require('cheerio');
var request = require('request');

var data = {};
var types = [   'Object',
                'String',
                'Array',
                'Function',
                'Number',
                'Boolean',
                ];

var sections = [    'Description',
                    'Properties',
                    'Methods'];

types.splice(0,1).forEach(function(value, index, array) {
    var url = 
        'https://developer.mozilla.org' +
        '/en-US/docs/Web/JavaScript/Reference/Global_Objects/' + 
        value +
        '/prototype';

    request(url, function(err, response, html) {
        if (err) return console.log(err);
        var $ = cheerio.load(html);
        var contents = $('#' + sections[0]).next().text();
        console.dir(contents);
    });

     
});
