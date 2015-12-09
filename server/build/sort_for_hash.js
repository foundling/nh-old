var sortForHash = module.exports = exports = function() {
  var jsonString = '',
      topLevelObjects = Object.keys(dbObj).sort();

  // create json string in sorted order
  topLevelObjects.forEach(function(val) {
    jsonString += JSON.stringify(dbObj[val]);
  });
};
