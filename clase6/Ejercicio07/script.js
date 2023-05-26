const botonesSubir = document.querySelectorAll('.subir');
const botonesBajar = document.querySelectorAll('.bajar');
const lista = document.getElementById('lista');

botonesSubir.forEach((boton) => {
  boton.addEventListener('click', () => {
    const elemento = boton.parentNode;
    const elementoAnterior = elemento.previousElementSibling;

    if (elementoAnterior) {
      lista.insertBefore(elemento, elementoAnterior);
    }
  });
});

botonesBajar.forEach((boton) => {
  boton.addEventListener('click', () => {
    const elemento = boton.parentNode;
    const elementoSiguiente = elemento.nextElementSibling;

    if (elementoSiguiente) {
      lista.insertBefore(elementoSiguiente, elemento);
    }
  });
});