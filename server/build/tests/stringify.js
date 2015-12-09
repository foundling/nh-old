var obj1 = {
  'a': 9,
};

var obj2 = {
  'b': 10
};

var objs = [obj1, obj2];

console.log(JSON.parse(JSON.stringify(objs)));
