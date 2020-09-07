

var publico_id="";
var public_file="";

function agrega_tab() {


    /*GENERA UN ID CON UNA LIBRERIA*/
    var id = uuid.v1();
    /*SELECCIONA EL CONTENEDOR DE LAS PESTAÑAS*/
    var ctab = document.getElementById("tab");
    /*SE CREA UN BUTTON QUE ES UNA NUEVA PESTAÑA*/
    var btn = document.createElement("button");
    btn.id= "btn"+id;
    /*TEXTO QUE SE VA A MOSTRAR EN LA PESTAÑA*/
    btn.appendChild(document.createTextNode("Nuevo.cs"));
    /*SE LE ASIGNA EL ESTILO DEFINIDO EN EL CSS*/
    btn.className="btn-bootstrap";
    /*MUESTRA EL CONTENIDO DE EL TAB*/
    btn.onclick=function(){cargar_contenido(id)};
    //AGREGA LA NUEVA PESTAÑA AL DIV
    ctab.appendChild(btn);
    //DIV QUE CONTIENE_TODO EL CONTENIDO DE LAS TAB
    var etab= document.getElementById("c_entrada");
    //SE CREA UN DIV INVISIBLE PARA CADA TAB
    var nueva_tab = document.createElement("div");
    nueva_tab.id='ctab_'+id;
    nueva_tab.style="display:none;";
    nueva_tab.className="w3-container city";

    var nueva_tab_contenido = document.createElement("div");
    nueva_tab_contenido.id='div_contenido'+id;
    nueva_tab_contenido.className="div_contenido";

    var n_div_txte = document.createElement("div");
    n_div_txte.id='div_txtentrada'+id;
    n_div_txte.className="div_txtentrada contenedor3";

    var div = document.createElement("div");

    var t3 = document.createElement("h3");
    t3.className="titulo3";
    t3.innerText="Archivo Entrada:";

    var salto = document.createElement("br");

    var c_a = document.createElement("textarea");
    c_a.id="contenido_archivo"+id;
    c_a.className="contenido_archivo";
    c_a.name="txtentrada";
    c_a.cols="50";
    c_a.rows="12";

    div.appendChild(t3);
    div.appendChild(c_a);

    n_div_txte.appendChild(div);



    var div_salida = document.createElement("div");
    div_salida.id='div_salida'+id;
    div_salida.className="div_salida";

    var h3_e= document.createElement("h3");
    h3_e.innerHTML="Consola: ";
    var ts1 = document.createElement("textarea");
    ts1.id="txtsalida1"+id;
    ts1.className="txtsalida1";
    ts1.name="txtentrada";
    ts1.cols="50";
    ts1.rows="8";

    div_salida.appendChild(h3_e);
    div_salida.appendChild(ts1);

    /*DIV DE ARBOL*/
    var div_ast = document.createElement("div");
    div_ast.id= 'graph' + id;
    div_ast.className="graph";
    div_ast.style="text-align: center;";


    nueva_tab_contenido.appendChild(n_div_txte);
    nueva_tab_contenido.appendChild(div_salida);
    /*DIV DEL ARBOL*/
    nueva_tab_contenido.appendChild(div_ast);
    nueva_tab.appendChild(nueva_tab_contenido);
    etab.appendChild(nueva_tab);

    cargar_contenido(id);

}

function cargar_contenido(pid) {
    publico_id=pid;

    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById('ctab_'+pid).style.display = "block";

    foco_color(pid);
}

function foco_color(btn) {
    var i;
    var x = document.getElementsByClassName("btn-bootstrap");
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "#007bff";

    }
    var btns=document.getElementById("btn"+btn);
    btns.style.backgroundColor = "#6fb059";
    public_file=btns.innerHTML;
}





function analizar(){
    var centrada= document.getElementById("contenido_archivo"+publico_id);
 
    //analisis_lexico(centrada.value);

    var texto=centrada.value+ " ";
    //var s = '{"datos":"'+texto+'"}';


    var url = 'http://localhost:3000/api/entrada';
    var data = {id:'"'+publico_id+'"', datos: '"'+texto+'"'};
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    //.catch(error => console.error('Error:', error))
    //.then(response => console.log('Success:', response));
    .catch(function(error) {
        alert(error);
    })
    .then(function(response) {
        
        alert(response);
    });


    /*
    var centrada= document.getElementById("contenido_archivo"+publico_id);

    var arbol = gri.parse(centrada.value);

    var recorrer = new Recorrido_Arbol();
    */



    /*ABRIR INDEX JSTREE*/
    /*
    var win = window.open("./jstree/index.html?id="+recorrer.recorrer_arbol(arbol),'_blank');

    var graphviz = 'digraph {' + recorrer.recorrer_arbol2(arbol)+ '}';
    d3.select("#graph" + publico_id).graphviz()
    .renderDot(graphviz);

    alert("analisis completado");
    */
   
}


function jstree(){
    var url = 'http://localhost:3000/api/entrada/jstree';
    var data = {id:'"'+publico_id+'"'};
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(function(error) {
        alert(error);
    })
    .then(function(response) {
        var win = window.open("./jstree/index.html?id="+response,'_blank');
        //alert(response);
    });

}