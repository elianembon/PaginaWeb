// Funcionalidad básica para la página
document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes añadir interacciones JavaScript
    
    // Ejemplo: Cambiar clase del navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    // Ejemplo: Validación de formularios
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
    
    // Ejemplo: Cargar dinámicamente los juegos en la página de juegos
    if (document.querySelector('#games-container')) {
        // Aquí iría la lógica para cargar los juegos desde una API o JSON
    }
});