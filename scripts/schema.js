/*
 *  use case:
 *  help({})
 *
 *  canonical name: Object Literal
 *  type: object
 *  general description:  An object creates ... 
 *  methods array of objects 
 *    obj.methodName and obj.methodDescription 
 *  properties array 
 *    obj.propertyName and obj.propertyDescription 
 *  [if methods or properties, they go here]
 *  node module: false
 *  
 *  
 *
 *
 *
 */

var data = {
    // standard language features
    'Object': {
        'description' : 'xyz',
        'properties' : {
            'prop1 name' : 'prop1 description',
            'prop2 name' : 'prop2 description'
        },
        'methods' : {
            'method1 name' : 'method1 desc'
        }
    }
    'Stream': {
        'description' : 'an abstract resource',
        'properties' : {
            'prop2 name' : 'prop2 description'
        },
        'methods' : {
            'method1 name' : 'method1 desc'
        }
    }
}};
