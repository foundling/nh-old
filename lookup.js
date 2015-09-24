var colors = require('colors');

var help = function(token) {

    var details = {
        'type': typeof token,
        'constructor': token.constructor.name,
        'prototype': token.prototype,
        'toString': ["'","'"].join(token.toString()),
        'valueOf': token.valueOf(),
//        'refers to': getReferents(token),
 //       'refers to %s': getLinksTo(token)
    }; 
    print(colorize(details));
};

var colorize = function(details) {

    var _details = {};

    for (var i in details) {
        _details[i.black] = details[i];
    }

    return _details;
    // take keys, save their values
    // delete that entry and make a new one 
};

var print = function(obj) {
    for (var i in obj) {
        console.log(i,": ",obj[i]);
    }
};

var token = Object;
help(token);


