var fs = require('fs'); 
var parser = require('./ejercicio1');


fs.readFile('./entrada.txt', (err, data) => {
    if (err) throw err;
    parser.parse(data.toString());
});
