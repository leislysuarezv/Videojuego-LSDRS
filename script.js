document.addEventListener("DOMContentLoaded", function() {
    // 1. LÓGICA EXISTENTE: Animaciones Fade-in al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 2. NUEVA LÓGICA: Menú Hamburguesa
    const menuToggle = document.getElementById('mobile-menu'); // El ID que pusimos en el HTML
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            // Esto quita o pone la clase 'active' para mostrar el menú
            navLinks.classList.toggle('active');
            
            // Opcional: Animación de las rayitas (se vuelven una X)
            menuToggle.classList.toggle('is-active');
        });
    }

    // Cerrar el menú automáticamente cuando haces clic en un link (Inicio, Misión, etc.)
    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});