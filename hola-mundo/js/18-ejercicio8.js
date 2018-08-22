'use strict'

/*
Calculadora:
- Pida dos numeros por pantalla
- Si metemos uno mal que nos los vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el resultado de
  sumar, restar, multiplicar y dividir esas dos cifras
 */

var number1 = parseInt(prompt('Introduce el primer numero ', 0));
var number2 = parseInt(prompt('Introduce el segundo numero', 0));

while (isNaN(number1) || number1 < 0 || isNaN(number2) || number2 < 0){
    number1 = parseInt(prompt('Introduce el primer numero ', 0));
    number2 = parseInt(prompt('Introduce el segundo numero', 0));
}

var result = 'La suma es: '+(number1+number2)+' <br/>'+
             'La resta es: '+(number1-number2)+' <br/>'+
             'La multiplicación es: '+(number1*number2)+' <br/>'+
             'La división es: '+(number1/number2)+' <br/>';

document.write('Los resultados de las operaciones son: <br/>');
document.write(result);