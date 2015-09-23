var wrap = function(text, maxWidth) {  

    var textarray = text.split(''),
        i=0;

    while (i < textarray.length) {
        i+= maxWidth;
        textarray.splice(i,0,'\n');
        i++;
    }

    return textarray.join('');
};

module.exports = wrap;

console.log(
        wrap(process.argv[2],parseInt(process.argv[3]))
    );
