var cheerio = require('cheerio');
var request = require('request');

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

// for each type, do a get request for the url for that type
// load that html
// for each section, search html for that section
//
// getting method names and descriptions
// for each html block, search each <dt><code></code></dt> block for  method name
// find next <dd> block, the containing text is the method description
types.forEach(function(value, index, array) {

    var url = 
        'https://developer.mozilla.org' +
        '/en-US/docs/Web/JavaScript/Reference/Global_Objects/' + 
        value;

    // our pseudoDB
    var data = {}; 

    request(url, function(err, response, html) {
        if (err) return console.log(err);
        var $ = cheerio.load(html);
        sections.forEach(function(value, index, array) {
            if (value === 'Description') {
                data[value] = $('#' + value).next().text();
            }
            else {
                var dl = $('#' + value).next();
                $(dl).find('dt').each(function(index, element){
                    var methodName = $(element).find('code').text();
                    var description = $(element).next().text();
                    console.log(methodName, '\n', description, '\n');
               });

                // find each dt > code and get that text
                // get each dt's sibling.text
                
            }

            //console.log(value.toUpperCase() + ':\n', data[value], '\n');
        });
    });

});
