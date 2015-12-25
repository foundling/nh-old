// database operations on the db.json file after de-serialization
// take search.string: e.g. 'String.prototype.split' and search for the documentation on split

var queryPath = 'String.prototype.split'.split('.');
var db;

function _find(queryPath) {
  var res;

  while (queryPath.length) {
    res = db[path[0]];
  }
  return res;
}
