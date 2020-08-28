/*------------------------------------------------IMPORTACIONES----------------------------------------------*/
%{
    //let CNodoError=require('../JavaAST/NodoError');
%}

/*------------------------------------------------LEXICO------------------------------------------------*/
%lex
%options case-insensitive
%%

"EXPRESION"         %{ return 'tk_expresion';%}
[0-9]+\b            %{  return 'tk_entero';  %}
"["                 %{  return 'tk_ca';  %}
"]"                 %{  return 'tk_cc';  %}
"+"                 %{ return 'tk_mas'; %}
"-"                 %{ return 'tk_menos';%}
"*"                 %{ return 'tk_multiplicar';%}
"/"                 %{ return 'tk_division'%}
"("                 %{  return 'tk_pa';  %}
")"                 %{  return 'tk_pc';  %}
";"                 %{  return 'tk_punto_coma';  %}



[ \t\r\n\f]+    %{ /*se ignoran*/ %}

<<EOF>>     %{  return 'EOF';   %}

.	       { console.log('Error Lexico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
  
/lex


%start INICIO
%% 

INICIO: LEXPRESION EOF {};

LEXPRESION: EXPRESION LEXPRESION
    | ;

EXPRESION: tk_expresion tk_ca OPERACION tk_cc tk_punto_coma { console.log("El Resultado Es: " + $3);}
    | error tk_punto_coma {console.log("Error sintactico en la Linea: " + this._$.first_line + " en la Columna: " + this._$.first_column);};

OPERACION: T tk_mas OPERACION { $$= $1 + $3;}
    | T tk_menos OPERACION { $$= $1 - $3; }
    | T { $$=$1; };

T: F tk_multiplicar T { $$= $1*$3; }
    | F tk_division T { $$= $1/$3; }
    | F { $$=$1; };

F: tk_entero { $$= Number($1);}
    | tk_pa OPERACION tk_pc { $$= $2;}
    | tk_pa error tk_pc { console.log("Error sintactico en: "+ $1 +"ERROR" +$3+ " en la Linea: " + this._$.first_line + " en la Columna: " + this._$.first_column); };
