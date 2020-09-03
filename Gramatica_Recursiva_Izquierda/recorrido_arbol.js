var id_n=1;
class Recorrido_Arbol{
    constructor(){
    }
    recorrer_arbol(nodo){
        var concatena;
        if(nodo.tipo!=""){
            concatena= "<ul><li data-jstree= '{ \"opened\" : true }'>" + nodo.valor + " (" + nodo.tipo + ")" + "\n";
        }else{
            concatena= "<ul><li data-jstree= '{ \"opened\" : true }'>"  + nodo.valor + "\n";
        }

        nodo.hijos.forEach(element => {
            concatena += this.recorrer_arbol(element);
        });
        concatena+="</li></ul>" +"\n";
        return concatena;
    }

    recorrer_arbol2(nodo){
        /*PARA IDS*/
        if(nodo.id==0){
            nodo.id= id_n;
            id_n++;
        }
        /* id [label= valor fillcolor="#d62728" shape="circle"]; */
        console.log(nodo.id + '[label= "' + nodo.valor + '" fillcolor="#d62728" shape="circle"];');
        nodo.hijos.forEach(element =>{
            /* id -> id; */
            console.log(nodo.id +'->' + id_n + ';');
            this.recorrer_arbol2(element);
        });
    }

}

module.exports = Recorrido_Arbol;

