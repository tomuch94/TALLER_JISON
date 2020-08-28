var fs = require('fs'); 
var parser = require('./gri');


fs.readFile('./entrada.txt', (err, data) => {
    if (err) throw err;
    parser.parse(data.toString());
});