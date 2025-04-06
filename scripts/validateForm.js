function validateTextField(field) {
    return field.value.trim() !== '';
}

function validateEmailField(field) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(field.value.trim());
}

function validateSelectField(field) {
    return field.value.trim() !== '';
}

function showValidationMessage(message, isSuccess) {
    const messageElement = document.createElement('div');
    messageElement.className = isSuccess ? 'alert alert-success' : 'alert alert-danger';
    messageElement.innerText = message;
    document.querySelector('.container').prepend(messageElement);

    setTimeout(() => {
        messageElement.remove();
    }, 3000);
}

function validateForm(event) {
    event.preventDefault();

    const nameField = document.getElementById('nombre');
    const emailField = document.getElementById('email');
    const selectField = document.getElementById('tipo-solicitud');
    const messageField = document.getElementById('mensaje');

    const isNameValid = validateTextField(nameField);
    const isEmailValid = validateEmailField(emailField);
    const isSelectValid = validateSelectField(selectField);
    const isMessageValid = validateTextField(messageField);

    if (isNameValid && isEmailValid && isSelectValid && isMessageValid) {
        showValidationMessage('Formulario enviado con éxito', true);
    } else {
        showValidationMessage('Por favor, completa todos los campos obligatorios', false);
    }
}

document.querySelector('form').addEventListener('submit', validateForm);
