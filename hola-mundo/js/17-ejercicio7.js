'use strict'

/*
Tabla de multiplicar de un numero introducido por pantalla
 */

var number = parseInt(prompt('¿De que numero quieres la tabla?', 1));

while (isNaN(number)){
    number = parseInt(prompt('¿De que numero quieres la tabla?', 1));
}

for (var i = 0; i <= 10 ; i++){
    console.log(number+' x '+i+' = '+number*i);
}