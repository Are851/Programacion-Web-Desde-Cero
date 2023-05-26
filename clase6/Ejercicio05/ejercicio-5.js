        function calcularOperaciones() {
            var numero1 = parseInt(document.getElementById('numero1').value);
            var numero2 = parseInt(document.getElementById('numero2').value);

            var suma = numero1 + numero2;
            var resta = numero1 - numero2;
            var multiplicacion = numero1 * numero2;
            var division = numero1 / numero2;

            document.getElementById('resultadoSuma').innerHTML = "Suma: " + suma;
            document.getElementById('resultadoResta').innerHTML = "Resta: " + resta;
            document.getElementById('resultadoMultiplicacion').innerHTML = "Multiplicación: " + multiplicacion;
            document.getElementById('resultadoDivision').innerHTML = "División: " + division;