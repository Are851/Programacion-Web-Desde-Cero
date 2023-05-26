function realizarOperaciones(num1, num2) {
  var resultados = {};

  resultados.suma = num1 + num2;
  resultados.resta = num1 - num2;
  resultados.multiplicacion = num1 * num2;
  resultados.division = num1 / num2;

  return resultados;
}

var num1 = 10;
var num2 = 5;

var operaciones = realizarOperaciones(num1, num2);

console.log(operaciones);
