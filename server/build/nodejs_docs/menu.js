var fs = require('fs');
var docs = JSON.parse(fs.readFileSync('./docs.json'));
var skipList = ['Addons'];

function traverseMenu(root, indent) {

    // for each module in 'modules'
    root.modules.forEach(function(module) {
        // check that the item's not in our skip list by searching it for the obj's textRaw property 
        if ( module.textRaw && skipList.indexOf(module.textRaw) !== -1 ) {
            return false;
        }
        // add indent and print it out
        console.log(indent + module.textRaw);
        if ('modules' in module) {
            return traverseMenu(module, indent + '  ');
        }
    });

};

traverseMenu(docs, '');

