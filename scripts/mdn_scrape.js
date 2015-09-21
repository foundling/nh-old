var cheerio = require('cheerio');
var request = require('request');
var serialize = require('node-serialize');
var fs = require('fs');

var types = [   'Object',
                'String',
                'Array',
                'Function',
                'Number',
                'Boolean'];

var sections = [    'Description',
                    'Properties',
                    'Methods'];

var data = {}; 

types.slice(0,1).forEach(function(dataType, index, array) {
    debugger;

    data[dataType] = {};
    var url = 
        'https://developer.mozilla.org' +
        '/en-US/docs/Web/JavaScript/Reference/Global_Objects/' + 
        dataType;

    request(url, function(err, response, html) {

        if (err) return console.log(err);
        var $ = cheerio.load(html);

        sections.forEach(function(section) {
            if (section === 'Description') {
                data[dataType][section] = $('#' + section).next().text();
            }
            else {
                data[dataType][section] = {};
                var dl = $('#' + section).next();

                $(dl).find('dt').each(function(index, element){
                    data[dataType][section]['methodName'] = $(element).find('code').text();
                    data[dataType][section]['description'] = $(element).next().text();
               });
            }
        });

        console.log(data);
        fs.writeFile('../lib/mdn_docs.txt', serialize.serialize(data), function(err) {
            if (err) throw err;
        });
    });


});
