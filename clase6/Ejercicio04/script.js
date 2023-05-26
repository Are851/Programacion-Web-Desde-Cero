function invertirPalabras(palabras) {
  var palabrasArray = palabras.split(" ");
  var resultado = "";

  for (var i = palabrasArray.length - 1; i >= 0; i--) {
    resultado += palabrasArray[i] + " ";
  }

  return resultado.trim();
}

console.log(invertirPalabras("Hola, cómo estás hoy?"));
console.log(invertirPalabras("El perro corre rápido"));
console.log(invertirPalabras("La casa es hermosa"));
