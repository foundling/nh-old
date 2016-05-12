var fs = require('fs');
var docs = JSON.parse(fs.readFileSync('./docs.json'));
var skipList = ['Addons'];

function traverseMenu(root, targetKey, indent) {

    // for each module in 'modules'
    root[targetKey].forEach(function(targetObj, index) {
        // check that the item's not in our skip list by searching it for the obj's textRaw property 
        if ( targetObj.textRaw && skipList.indexOf(targetObj.textRaw) !== -1 ) {
            return false;
        }
        
        // add indent and print it out
        console.log(indent + targetObj.textRaw);
        if ('modules' in targetObj) {
            return traverseMenu(targetObj, 'modules', indent + '  ');
        }
        if ('methods' in targetObj) {
            return traverseMenu(targetObj, 'methods', indent + '  ');
        }
    });

};

traverseMenu(docs, 'modules', '');
