var fs = require('fs'); 
var parser = require('./gri');
var arbol = require('./recorrido_arbol')


fs.readFile('./entrada.txt', (err, data) => {
    if (err) throw err;
    //parser.parse(data.toString());
    var raiz = new arbol();
    console.log(raiz.recorrer_arbolito3(parser.parse(data.toString())));
    
    /*
    var win = window.open("", '_blank');
    win.document.write(
        '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="shortcut icon" href="/favicon.ico"><title>Awesome JSON</title><link href="/css/main.css" rel="stylesheet"></head><body><pre>' +
        ast +
        '</pre><script type="text/javascript" src="chrome.js"></script></body></html>'
        )
    win.focus();
    */
});