'use strict'

/*
Muestre todos los numeros divisores de un numero introducido en prompt
 */

var number = parseInt(prompt('Introduce un numero', 1));

for (var i = 1; i <= number; i++){

    if (number%i == 0){
        console.log('Divisor: '+ i);
    }
}