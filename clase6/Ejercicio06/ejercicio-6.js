// Paso 2: Definir el arreglo de objetos
var personas = [
  {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid"
  },
  {
    nombre: "María",
    edad: 30,
    ciudad: "Barcelona"
  },
  {
    nombre: "Pedro",
    edad: 35,
    ciudad: "Valencia"
  }
];

// Paso 3: Declarar la función
function crearMensajesDePresentacion(personas) {
  // Paso 4: Crear un nuevo arreglo vacío
  var mensajes = [];

  // Paso 5: Recorrer el arreglo de personas
  personas.forEach(function(persona) {
    // Paso 6: Crear el mensaje de presentación
    var mensaje = "Mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";

    // Paso 7: Agregar el mensaje al arreglo de mensajes
    mensajes.push(mensaje);
  });

  // Paso 8: Devolver el arreglo de mensajes como resultado
  return mensajes;
}

// Paso 9: Invocar la función y mostrar los mensajes por consola
var mensajesDePresentacion = crearMensajesDePresentacion(personas);

mensajesDePresentacion.forEach(function(mensaje) {
  console.log(mensaje);
});
