var fs = require('fs');
var docs = JSON.parse(fs.readFileSync('./docs.json'));


var space = ''
function traverseMenu(root) {

    // for each module in 'modules'
    root.modules.forEach(function(module) {
        console.log(space + module.textRaw);
        if ('modules' in module) {
            space += '    '
            traverseMenu(module);
        }
    });

};

traverseMenu(docs);

