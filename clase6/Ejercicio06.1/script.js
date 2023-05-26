const personasForm = document.getElementById('personas-form');
const nombreInput = document.getElementById('nombre-input');
const edadInput = document.getElementById('edad-input');
const ciudadInput = document.getElementById('ciudad-input');
const mensajesList = document.getElementById('mensajes-list');

personasForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = nombreInput.value;
  const edad = edadInput.value;
  const ciudad = ciudadInput.value;

  const mensaje = `Mi nombre es ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`;
  const mensajeItem = document.createElement('li');
  mensajeItem.textContent = mensaje;
  mensajesList.appendChild(mensajeItem);

  nombreInput.value = '';
  edadInput.value = '';
  ciudadInput.value = '';
});