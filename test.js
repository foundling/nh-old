var async = require('async');
var init = 'initial data';

var a = function(next) {
  next(null, init);
};

var b = function(data, next) {
  next(null, data);
};

var c = function(data, next) {
  next(null, data);
};

async.waterfall([a,b,c], function(err, result) {
  console.log(result);
});
