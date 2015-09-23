var lineCount = function(line) {
    return line.reduce(function(accumulator, word){
        return accumulator + word.length;
    }, 0); 
};

var line = ['Word','Word','Word','Word'];

console.log(
        lineCount(line)
        );
