    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');
    const submitButton = document.getElementById('submit-button');

    emailInput.addEventListener('input', validateEmail);
    ageInput.addEventListener('input', validateAge);

    function validateEmail() {
      const email = emailInput.value;
      const emailError = document.getElementById('email-error');
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailRegex.test(email)) {
        emailError.textContent = 'Correo electrónico inválido';
        emailInput.classList.add('invalid');
      } else {
        emailError.textContent = '';
        emailInput.classList.remove('invalid');
      }

      checkFormValidity();
    }

    function validateAge() {
      const age = ageInput.value;
      const ageError = document.getElementById('age-error');

      if (isNaN(age) || age <= 0) {
        ageError.textContent = 'Edad inválida';
        ageInput.classList.add('invalid');
      } else {
        ageError.textContent = '';
        ageInput.classList.remove('invalid');
      }

      checkFormValidity();
    }

    function checkFormValidity() {
      if (emailInput.validity.valid && ageInput.validity.valid) {
        submitButton.disabled = false;
      } else {
        submitButton.disabled = true;
      }
    }
