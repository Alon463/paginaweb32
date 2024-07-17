document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var message = document.getElementById('message');

    if (validateEmail(email)) {
        message.textContent = 'Inicio de sesión exitoso. Bienvenido, ' + email;
        message.style.color = '#4caf50';
    } else {
        message.textContent = 'Por favor, ingrese un correo electrónico válido.';
        message.style.color = '#d32f2f';
    }
});

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
