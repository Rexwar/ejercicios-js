document.addEventListener('DOMContentLoaded', function () {
    // Obtener elementos del ratón y del teclado
    var raton = document.getElementById('raton');
    var teclado = document.getElementById('teclado');

    // Función para mostrar información en los cuadros
    function muestraInformacion(event, elemento) {
        var info = 'Evento: ' + event.type + '<br>' +
                   'Propiedades del evento:<br>' +
                   'Página: ' + event.pageX + ', ' + event.pageY + '<br>' +
                   'Pantalla: ' + event.screenX + ', ' + event.screenY;

        // Mostrar información en el cuadro correspondiente
        elemento.querySelector('div').innerHTML = info;
    }

    // Función para cambiar el color de fondo según el tipo de evento
    function cambiaColorFondo(color, elemento) {
        elemento.style.backgroundColor = color;
    }

    // Evento al mover el ratón
    document.addEventListener('mousemove', function (event) {
        muestraInformacion(event, raton);
        cambiaColorFondo('white', raton);
        cambiaColorFondo('white', teclado);
    });

    // Evento al pulsar una tecla
    document.addEventListener('keydown', function (event) {
        muestraInformacion(event, teclado);
        cambiaColorFondo('#CCE6FF', teclado);
    });

    // Evento al pulsar un botón del ratón
    document.addEventListener('mousedown', function (event) {
        muestraInformacion(event, raton);
        cambiaColorFondo('#FFFFCC', raton);
    });

    // Evento al volver a mover el ratón para restaurar el color de fondo
    document.addEventListener('mouseover', function (event) {
        cambiaColorFondo('white', raton);
        
    });
});
