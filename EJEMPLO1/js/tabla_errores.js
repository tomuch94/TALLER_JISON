
function tabla_er() {
    // Abrir nuevo tab

    var verrores="";
    var a;

    for(a=0;a<tabla_errores.length;a++){
        verrores+= "<tr>\n" +
            "<td>"+ a +"</td>\n" +
            "<td>"+ tabla_errores[a].lexema +"</td>\n" +
            "<td>"+ tabla_errores[a].tipo +"</td>\n" +
            "<td>"+ tabla_errores[a].fil +"</td>\n" +
            "<td>"+ tabla_errores[a].col +"</td>\n" +
            "<td>"+ tabla_errores[a].error +"</td>\n" +
            "</tr>\n";
    }

    var win = window.open("", '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
    win.document.write("<style>\n" +
        "table {\n" +
        "font-family: arial, sans-serif;\n" +
        "border: 1px solid #dddddd;\n" +
        "width: 100%;\n" +
        "}\n" +
        "td, th {\n" +
        "border: 1px solid #dddddd;\n" +
        "text-align: left;\n" +
        "padding: 8px;\n" +
        "}\n" +
        "th{\n" +
        "background-color:#2196F3;\n" +
        "color: white;\n" +
        "}\n" +
        "</style>" +
        "<h2>TABLA DE ERRORES</h2>\n" +
        "<table>\n" +
        "<tr>\n" +
        "<th>NO.</th>\n" +
        "<th>LEXEMA</th>\n" +
        "<th>TIPO</th>\n" +
        "<th>FILA</th>\n" +
        "<th>COLUMNA</th>\n" +
        "<th>ERROR</th>\n" +
        "</tr>\n" +
        verrores +
        "</table>")
    win.focus();
}