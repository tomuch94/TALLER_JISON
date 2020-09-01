
class  Nodo_Arbol{


    constructor(valor,tipo){
        this.valor=valor;
        this.tipo=tipo;
        this.hijos=[];

    }
    getValor(){
        this.valor;
    }

    agregarHijo(hijo){
        this.hijos.push(hijo);
    }

}




//exportar la clase y poder importarla en otras clases 
module.exports= Nodo_Arbol;