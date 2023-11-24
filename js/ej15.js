// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {
    // Definición de la función muestra
    function muestra() {
        // Obtén el párrafo y el enlace por sus clases
        var parrafo = document.querySelector('.adicional');
        var enlace = document.querySelector('.enlace');

        // Muestra el contenido del párrafo
        parrafo.classList.remove('oculto');
        parrafo.classList.add('visible');

        // Oculta el enlace
        enlace.style.display = 'none';
    }
})