document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.menu-inicio');
    const dropdownMenu = document.querySelector('.opciones-menu');

    hamburger.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.menu-container')) {
            dropdownMenu.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });
});
