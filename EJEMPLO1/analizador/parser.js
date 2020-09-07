var fs = require('fs'); 
var parser = require('./gri');
var arbol = require('./recorrido_arbol');


fs.readFile('./entrada.txt', (err, data) => {
    if (err) throw err;
    

    var raiz = new arbol();
    console.log(raiz.recorrer_arbol2(parser.parse(data.toString())));

});