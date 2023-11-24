document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los elementos <a> que son descendientes directos de <div>
    var enlacesContenido = document.querySelectorAll('div > a');

    // Iterar sobre los enlaces para agregar un listener a cada uno
    enlacesContenido.forEach(function (enlace) {
        // Agregar un listener al evento "click" de cada enlace
        enlace.addEventListener('click', function (event) {
            // Prevenir la acción predeterminada del enlace
            event.preventDefault();

            // Obtener el elemento padre (div) del enlace
            var seccion = enlace.parentNode;

            // Obtener el párrafo anterior al enlace
            var parrafo = enlace.previousElementSibling;

            // Alternar el estado de visibilidad del párrafo
            parrafo.style.display = (parrafo.style.display === 'none' || parrafo.style.display === '') ? 'block' : 'none';

            // Cambiar el texto del enlace según el estado del párrafo
            var mensaje = (parrafo.style.display === 'none' || parrafo.style.display === '') ? 'Mostrar contenidos' : 'Ocultar contenidos';
            enlace.textContent = mensaje;
        });
    });
});
