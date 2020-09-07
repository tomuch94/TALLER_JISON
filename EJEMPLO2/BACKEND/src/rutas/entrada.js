const {Router, text} = require('express');
const router = Router();

const jison =require('../analizador/gri.js');
const Recorrido_Arbol = require('../analizador/recorrido_arbol');

var ast;
var tbl_error;

router.post('/',(req,res)=>{
    //console.log(req.body);
    const{id,datos} =req.body;
    iniciar_analisis(id,datos);
    console.log("Archivo analizado correctamente");
    res.json('Archivo analizado correctamente');
   
});

//REPORTE ERRORES FORMATO JSON
router.post('/rtoken',(req,res)=>{
    const{id} =req.body;

    //var er=false;
    var ns=true;
    arboles.forEach(element => {
            
        if(element.id==id){
            ns=false;
            console.log(id);
            var prub=element.tabla_error;
            var data="[";
            var cont = 0
            prub.forEach(element => {
                data+=  JSON.stringify(element);
                cont++;
                if(cont<prub.length){
                    data+=",";
                }
                
            });
            data+="]";
            res.json(data);
        }
    });
    if(ns){
        res.json("ERROR");
    }


});




function iniciar_analisis(id,texto){
    texto=texto.substring(1,texto.length-1)
    
    var arbol=jison.parse(texto);
    ast=arbol.ast;
    tbl_error=arbol.tabla_error;
}

router.post('/jstree',(req,res)=>{
   const{id} =req.body;
   rast= new Recorrido_Arbol();
   res.json(rast.recorrer_arbol(ast));

});



 router.get('/limpiar',(req,res)=>{
  arboles=[];
  res.json("Vaciado!!!");
});
 

module.exports = router;


