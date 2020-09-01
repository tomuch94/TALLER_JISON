class Nodo_Arbol{
    constructor(valor, tipo){
        this.valor=valor;
        this.tipo=tipo;
        this.hijos=[];
    }
    getValor(){
        this.valor;
    }
    getTipo(){
        this.tipo;
    }
    agrerHijo(hijo){
        this.hijos.push(hijo);
    }
}


module.exports= Nodo_Arbol;

