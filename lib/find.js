var db = 
{
    'String' : {
        'description' : 'A string is a read-only sequence of characters',
        'isNative' : true,
        'children' : {
            'prototype' : {
                'description': 'Allows the addition of properties to a str obj.',
                'isNative':true,
                'childType': 'property',
                'children' : {
                    'splice' : {
                        'description': 'splice takes an array and ...',
                        'childType': 'method', 
                        'isNative':true,
                    },
                    'length' : {
                        'description' : 'the number of children',
                        'childType' : 'property',
                        'isNative': true 
                    }

                },
            },
            'fromCharCode' : {
                'description':'converts a char code to a string',
                'isNative': true,
                'childType': 'method',
            },
        }
    }
};

// approach
// take each token, starting on the left side
// use that token as a key in the db
// that gets you one level away from using the next token,
// so you need to check each subobj on that level for the next token
// repeat with next token on new sub obj
//var tokens = ['String','prototype','splice'];
//var target = db[tokens[0]]['children'][tokens[1]]['children'][tokens[2]]['description'];
//console.log(target);

var find = function(token) {
  var tokens = token.split('.');

  // recurse until we've found what we're looking for
  // then print out values at that level
  for (var i = 0, target = db; i < tokens.length; i++ ) {
    if (i === tokens.length - 1) {
      target = {
        name: tokens[i],
        isNative: (target[tokens[i]]['isNative'] === true) ? 'yes' : 'no',
        description: target[tokens[i]]['description'] || {},
        children: target[tokens[i]]['children'] || {},
      };
    }
    else {
      target = target[tokens[i]]['children'];
    }
  }
  return target; 
};

//console.log(find('String.prototype'));

function print(object){

    var details = {
      description:  object['description'],
      isNative:     object['isNative'],
      methods:      Object.keys(object['children']).filter(function(key, index) {
        return object['children'][key]['childType'] === 'method'; 
      }),
      properties:   Object.keys(object['children']).filter(function(key, index) {
        return object['children'][key]['childType'] === 'property'; 
      }),
    }; 

    for(var key in details){
      if (key === 'isNative') console.log(key,": ", details[key]);
      else if (key === 'methods' || key === 'properties') {
        console.log(key);
        for (var i in details[key]) console.log('  ',details[key][i]);
      }
      else {
        console.log(key);
        console.log(details[key]);
      }
    }


}
var t = find('String');
print(t);
//print('String.prototype.slice');
