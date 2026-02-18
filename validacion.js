document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.innerText = type === 'password' ? 'Mostrar' : 'Ocultar';
});

document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;

    let nombreError = document.getElementById('nombreError');
    let usuarioError = document.getElementById('usuarioError');
    let passwordError = document.getElementById('passwordError');
    let formMessage = document.getElementById('formMessage');

    nombreError.innerText = '';
    usuarioError.innerText = '';
    passwordError.innerText = '';
    formMessage.innerText = '';

    let isValid = true;

    function validateField(value, errorElement, fieldName) {
        if (value.length < 3) {
            errorElement.innerText = `El ${fieldName} debe tener al menos 3 caracteres.`;
            return false;
        }

        const regex = /^[\d\s\-\.]+$/;
        if (!regex.test(value)) {
            errorElement.innerText = `El ${fieldName} no debe contener caracteres especiales (aparte de guiones y puntos).`;
            return false;
        }

        return true;
    }

    isValid = validateField(nombre, nombreError, 'Nombre');

    if (!validateUsuario(usuario)) {
        usuarioError.innerText = 'El nombre de usuario no es válido.';
        isValid = false;
    }

    isValid = validateField(usuario, usuarioError, 'Usuario');
    isValid = validateField(password, passwordError, 'Contraseña');

    if (isValid) {
        formMessage.innerText = 'Formulario enviado correctamente.';
        document.getElementById('miFormulario').reset();
    }
});

function validateUsuario(usuario) {
    return usuario.length >= 5; 
}