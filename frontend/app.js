
document.addEventListener('DOMContentLoaded', () => {
    console.log('ClasesAlaCarta: Fully enhanced experience initialized.');

    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = {
                name: document.querySelector('input[name="name"]').value,
                age: document.querySelector('input[name="age"]').value,
                email: document.querySelector('input[name="email"]').value,
                password: document.querySelector('input[name="password"]').value
            };

            if (!formData.name || !formData.age || !formData.email || !formData.password) {
                alert('Por favor, complete todos los campos.');
                return;
            }

            alert('Registro exitoso! Bienvenido a ClasesAlaCarta.');
            window.location.href = 'cursos.html';
        });
    }

    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;

            if (!email || !password) {
                alert('Por favor, complete todos los campos.');
                return;
            }

            alert('Inicio de sesión exitoso! Redirigiendo a su cuenta.');
            window.location.href = 'perfil.html';
        });
    }
});
