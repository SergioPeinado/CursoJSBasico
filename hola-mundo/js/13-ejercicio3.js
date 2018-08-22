'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
 */

var number1 = parseInt(prompt('Introduce el primer numero', 0));
var number2 = parseInt(prompt('Introduce el segundo numero', 0));

while(number1 >= number2){
    number1 = parseInt(prompt('Introduce el primer numero', 0));
    number2 = parseInt(prompt('Introduce el segundo numero', 0));
}

for (var i = (number1 + 1); i < number2 ; i++){

    console.log(i);

    if (i == (number2 - 1)){
        break;
    }
}