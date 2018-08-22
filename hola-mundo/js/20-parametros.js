'use strict'

function calculadoraCon(number1, number2) {
        console.log('Suma: ' + (number1 + number2));
        console.log('Resta: ' + (number1 - number2));
        console.log('Multiplicación: ' + (number1 * number2));
        console.log('Division: ' + (number1 / number2));
}
function calculadoraWin(number1, number2) {
    document.write('Suma: ' + (number1 + number2) +' <br/>');
    document.write('Resta: ' + (number1 - number2)+' <br/>');
    document.write('Multiplicación: ' + (number1 * number2)+' <br/>');
    document.write('Division: ' + (number1 / number2)+' <br/>');
}
var number1 = parseInt(prompt('Introduce el primero numero: ', 1));
var number2 = parseInt(prompt('Introduce el segundo numero: ', 1));

while (isNaN(number1 || isNaN(number2))){
    number1 = parseInt(prompt('Introduce el primero numero: ', 1));
    number2 = parseInt(prompt('Introduce el segundo numero: ', 1));
}
calculadoraCon(number1, number2);
calculadoraWin(number1, number2);
