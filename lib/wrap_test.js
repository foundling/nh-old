var wrap = require('./tools').wrap;

if (!process.argv[2] || !process.argv[3]) {
    console.log('pass in correct arguments, dummy');
    process.exit(1);
}

console.log(wrap(process.argv[2], parseInt(process.argv[3])));
