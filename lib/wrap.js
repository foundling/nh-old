var wrap = function(text, maxWidth) {  

    text = '\t' + text; 
    var textarray = text.split(''),
        i=0;

    while (i < textarray.length) {
        i+= maxWidth;
        textarray.splice(i,1,'\n\t');
    }

    return textarray.join('');
};

module.exports = wrap;

console.log(
        wrap(process.argv[2],parseInt(process.argv[3]))
);
