var wrap = function(text, maxWidth) {  

    debugger;
    var textarray = text.split(''),
        i=0;

    while (i < textarray.length) {
        console.log(i);

        i += maxWidth;

        // if ta[i] is a space
        // rewind until not a space
        while (textarray[i] !== ' ' && i > 0) {
                i--;
        } 
        if (i > 0) textarray.splice(i,0,'\n');
    }

    return textarray.join('');
};

module.exports = wrap;

console.log(
        wrap(process.argv[2],parseInt(process.argv[3]))
);
