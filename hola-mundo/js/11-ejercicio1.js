'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir
 */

let number1 = parseInt(prompt('Introduce el primer numero', 0));
let number2 = parseInt(prompt('Introduce el segundo numero', 0));

while(number1 < 0 || number2 < 0 || isNaN(number1) || isNaN(number2)){
    number1 = parseInt(prompt('Introduce el primer numero', 0));
    number2 = parseInt(prompt('Introduce el segundo numero', 0));
}

if (number1 == number2) {
    alert('Los numeros son iguales');
}else if (number1 > number2){
    alert('El numero mayor es: '+ number1);
    alert('El numero menor es: '+ number2);
}else if (number2 > number1){
    alert('El numero mayor es: '+ number2);
    alert('El numero menor es: '+ number1);
}else {
    alert('Introduce numeros correctos');
}