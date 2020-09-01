var pos = 0;
var cclass=0;
class Recorrido_Arbol{

    constructor(){
        //this.Raiz=Raiz;
     //console.log("\n");
     //console.log("mostrando la raiz");
     //console.log(this.Raiz);
        // this.recorrer_arbolito(Raiz);
    }

    //esto es para recorrer el arbol


    recorrer_arbolito(nodo)
    {
        var concatena;
        //var adrian;
        if(nodo.tipo!=""){
            concatena="<ul><li data-jstree='{ \"opened\" : true }'>"+nodo.valor+ " (" + nodo.tipo+")"+"\n";
           // concatena = "<tr><td>"+nodo.valor+ " (" + nodo.tipo+")"+"\n";    
        }else{
            concatena="<ul><li data-jstree='{ \"opened\" : true }'>"+nodo.valor +"\n";
            //concatena="<tr><td>"+nodo.valor +"\n";
        }
        //console.log(concatena);
        //if(nodo.hijos.count>0)
        {
            nodo.hijos.forEach(element => {
                //lamada recursiva
                concatena+=this.recorrer_arbolito(element);
              //  concatena+=this.recorrer_arbolito(element);

    
                
            });
        }


        //concatena += "</td></tr>"+"\n";
        concatena+="</li></ul>"+"\n";
        return concatena;
        //return adrian;
    }

    recorrer_arbolito2(nodo)
    {
        var concatena= "";
        //var adrian;
        
            //concatena=""+nodo.valor+ " (" + nodo.tipo+")"+"\n";
           concatena += "{ \n ";
           concatena +=  " \" " + "nodo" + " \"" + ":";
            
        if(!(nodo.hijos.length==0)){
            concatena+= " { \n";
           // console.log("tamanolenga "+ nodo.hijos.length );
            var tamanoarreglo = nodo.hijos.length;

            //console.log("tamanoleng "+ tamanoarreglo);
            //console.log("valor "+ nodo.hijos[tamanoarreglo -1]);
            //console.log("valor "+ nodo.hijos[tamanoarreglo -1]);
            //console.log("valor0  "+ nodo.hijos[0]);
            //console.log("tamano "+ tamanoarreglo );
            //console.log("tamanoleng "+ tamanoarreglo);
            nodo.hijos.forEach(element => {
                //lamada recursiva
                
            //console.log("elemento "+ element );
            
            if(nodo.hijos[tamanoarreglo -1].getTipo() == element.getTipo())
                {
                    concatena+=this.recorrer_arbolito2(element);
                }else{
                //concatena+= ",";
                concatena+=this.recorrer_arbolito2(element);
                }
                //  concatena+=this.recorrer_arbolito(element); 
            });
        }else{
            concatena+= "\""+"nodo"+"\""+":" + nodo.tipo;
        }
        
    

        
        //concatena += "</td></tr>"+"\n";
        concatena+="}"+"\n";
        return concatena;
        //return adrian;
    }
}

//exportar la clase y poder importarla en otras clases 
module.exports= Recorrido_Arbol;