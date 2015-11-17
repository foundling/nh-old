var fs = require('fs');

function f1(next) {

  fs.readdir('/', function(err, filenames){
    console.log('f1');
    next(f3);
  });
}
function f2(next) {
  fs.readdir('/', function(err, filenames){
    console.log('f2');
    next(f4);
  });
}
function f3(next) {
  fs.readdir('/', function(err, filenames){
    console.log('f3');
    next();
  });
}
function f4() {
  fs.readdir('/', function(err, filenames){
    console.log('f4');
  });
}

f1(f2);
