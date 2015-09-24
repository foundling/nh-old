// this file just makes an object out of some commonly useful 
// properties of a <token> object which is passed in
// to help, e.g. help(token)

var colors = require('colors');

var help = function(obj, callback) {
    callback(obj);
};

var getDetails = function(token) {

    var details = {
        'name': token.name,
        'type': typeof token,
        'constructor': token.constructor.name,
        'prototype': token.prototype,
        'toString': ["'","'"].join(token.toString()),
        'valueOf': token.valueOf() 
//        'refers to': getReferents(token),
 //       'refers to %s': getLinksTo(token)
    }; 
    print(colorize(details));
};

// i'm modifying the key here, i know. 
var colorize = function(details) {

    // warning: keys are mutated here, this is post-production

    var _details = {};

    for (var i in details) {

        var colorizedKey = (' ' + i + ' ').green.bgWhite;
        _details[colorizedKey] = details[i];
    }

    return _details;
    // take keys, save their values
    // delete that entry and make a new one 
};

// purely for printing the items
var print = function(obj) {
    for (var i in obj) {
        console.log(
                    i,
                    ":\t",
                    obj[i]
                    );
    }
    console.log('\n');
};

//
////
// // // MAIN SCRIPT STARTS HERE
// // // // // / // // / // // / /
var tests = {};
tests.obj = Object;
tests.num = Number;
tests.regexp = RegExp;
tests.arr = Array;
tests.err = Error;

// here we define our input interface, a single object
var token = tests;

Object.keys(tests).forEach(function(key,index,array){
    help(tests[key], getDetails); 
});

module.exports = help;
