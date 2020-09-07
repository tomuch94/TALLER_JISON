/*------------------------------------------------IMPORTACIONES----------------------------------------------*/
%{

%}
%lex
%options case-insensitive
%%

"EXPRESION"         %{ return 'tk_expresion';%}
[0-9]+("."[0-9])?\b            %{  return 'tk_decimal';  %}
"["                 %{  return 'tk_ca';  %}
"]"                 %{  return 'tk_cc';  %}
"+"                 %{ return 'tk_mas'; %}
"-"                 %{ return 'tk_menos';%}
"*"                 %{ return 'tk_multiplicar';%}
"/"                 %{ return 'tk_division'%}
"("                 %{  return 'tk_pa';  %}
")"                 %{  return 'tk_pc';  %}
";"                 %{  return 'tk_punto_coma';  %}



[ \t\r\n\f]+         { /*se ignoran*/ }

<<EOF>>     {  return 'EOF';   }

.	       { document.getElementById("txtsalida1"+publico_id).value+='Error Lexico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column +"\n"; }
  

/lex

%left tk_mas tk_menos
%left tk_multiplicar tk_division
%left tk_pa tk_pc

%start INICIO
%% 

INICIO: LEXPRESION EOF { $$= new Nodo_Arbol("INICIO","");
     $$.agregarHijo($1);
     return $$;
    };

LEXPRESION: LEXPRESION EXPRESION {$$= new Nodo_Arbol("LEXPRESION","");
                                    $$.agregarHijo($1);
                                    $$.agregarHijo($2);
                                }
    | EXPRESION { $$= new Nodo_Arbol("LEXPRESION","");
                $$.agregarHijo($1);
    };

EXPRESION: tk_expresion tk_ca E tk_cc tk_punto_coma { $$ = new Nodo_Arbol("EXPRESION","");
                                                    $$.agregarHijo(new Nodo_Arbol("expresion","expresion"));
                                                    $$.agregarHijo($3);

    }
    | error tk_punto_coma {document.getElementById("txtsalida1"+publico_id).value+="Error sintactico en la Linea: " + this._$.first_line + " en la Columna: " + this._$.first_column+"\n";};

E: E tk_mas E { $$ = new Nodo_Arbol("E","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo_Arbol("+","suma"));
                        $$.agregarHijo($3);
                        }
    | E tk_menos E { $$ = new Nodo_Arbol("E","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo_Arbol("-","resta"));
                        $$.agregarHijo($3);
                        }
    | E tk_multiplicar E { $$ = new Nodo_Arbol("E","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo_Arbol("*","multiplicar"));
                        $$.agregarHijo($3);
                        }
    | E tk_division E { $$ = new Nodo_Arbol("E","");
                        $$.agregarHijo($1);
                        $$.agregarHijo(new Nodo_Arbol("/","division"));
                        $$.agregarHijo($3);
                        }
    | tk_pa E tk_pc { $$ = new Nodo_Arbol("E", "");
                        $$.agregarHijo($2);
                    }
    | tk_pa error tk_pc {console.log("Error sintactico en: "+ $1 +"ERROR" +$3+ " en la Linea: " + this._$.first_line + " en la Columna: " + this._$.first_column);}
    | tk_decimal { $$ = new Nodo_Arbol("E","");
                   $$.agregarHijo(new Nodo_Arbol($1,"decimal"));
                   };


