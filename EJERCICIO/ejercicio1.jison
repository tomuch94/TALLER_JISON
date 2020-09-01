/*------------------------------------------------IMPORTACIONES----------------------------------------------*/
%{
    //let CNodoError=require('../JavaAST/NodoError');
%}
%lex
%options case-sensitive
%%

"class"         %{ return 'tk_class';%}
"{"             %{ return 'tk_llavea';%}
"}"             %{ return 'tk_llavec';%}
[a-zA-Z][a-zA-Z0-9_]*	                { return 'tk_identificador'; }    // identificadores



[ \t\r\n\f]+         { /*se ignoran*/ }

<<EOF>>     {  return 'EOF';   }

.	       { console.log('Error Lexico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
  

/lex



%start INICIO
%% 

INICIO: LCLASES EOF;

LCLASES: LCLASES CLASES
    | CLASES;

CLASES: tk_class tk_identificador tk_llavea LDCLASES tk_llavec
    | error tk_llavec {console.log("Error sintactico en la Linea: " + this._$.first_line + " en la Columna: " + this._$.first_column);};
    
LDCLASES: CLASES LDCLASES
     | /*epsilon*/;



