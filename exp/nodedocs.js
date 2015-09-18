var request = require('request');

request('https://nodejs.org/docs/latest-v0.10.x/api/vm.json', function(err, response, body) {
    if (err) throw err;
    console.log(JSON.parse(body).modules[0].modules);
});
