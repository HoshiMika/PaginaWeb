// Este archivo contiene el código JavaScript que maneja la lógica del formulario de contacto.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (validateForm(name, email, message)) {
            // Aquí puedes agregar la lógica para enviar los datos del formulario
            console.log('Formulario enviado:', { name, email, message });
            alert('Formulario enviado con éxito!');
            form.reset();
        }
    });

    function validateForm(name, email, message) {
        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos.');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});