var pos = 0;
var cclass=0;
    
var id_n=1;
class Recorrido_Arbol{

    constructor(){ 
    }
    recorrer_arbolito(nodo)
    {
        var concatena;
        if(nodo.tipo!=""){
            concatena="<ul><li data-jstree='{ \"opened\" : true }'>"+nodo.valor+ " (" + nodo.tipo+")"+"\n";  
        }else{
            concatena="<ul><li data-jstree='{ \"opened\" : true }'>"+nodo.valor +"\n";
        }
            nodo.hijos.forEach(element => {
                concatena+=this.recorrer_arbolito(element);
            });


        concatena+="</li></ul>"+"\n";
        return concatena;
    }

    recorrer_arbolito2(nodo)
    {
        var concatena= "";
        if(nodo.tipo==""){
            concatena+= "\""+nodo.valor + "\":{";         
        }
        else{
            concatena+="\""+nodo.tipo+"\""+":"+"\""+nodo.tipo+"\"";
            return concatena;
        }
        var tamanoarreglo = nodo.hijos.length;
        var contador=1;
            nodo.hijos.forEach(element => {
                concatena+=this.recorrer_arbolito2(element);
                if(contador<tamanoarreglo){

                    concatena+=",";
                    
                }
                contador++;
                
            });
        concatena+="}"+"\n";
        return concatena;

    }

    recorrer_arbolito3(nodo)
    {
        var concatena;
        if(nodo.id==0){
            nodo.id=id_n;
            id_n++;
        }
        console.log(nodo.id + ' [label= "'+ nodo.valor +'" fillcolor="#d62728" shape="circle"];');
            nodo.hijos.forEach(element => {
                console.log(nodo.id+'->'+ id_n +";");
                concatena+=this.recorrer_arbolito3(element);
            });
        return concatena;
    }
}

//exportar la clase y poder importarla en otras clases 
module.exports= Recorrido_Arbol;