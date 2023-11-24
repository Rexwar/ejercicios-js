document.addEventListener('DOMContentLoaded', function () {
    
    function anade() {
        // Crear un nuevo elemento de lista
        var nuevoElemento = document.createElement('li');

        // Crear un nodo de texto con contenido
        var textoNuevoElemento = document.createTextNode('Nuevo elemento');

        // Añadir el nodo de texto al nuevo elemento de lista
        nuevoElemento.appendChild(textoNuevoElemento);

        // Obtener la lista existente por su ID
        var lista = document.getElementById('lista');

        // Añadir el nuevo elemento a la lista
        lista.appendChild(nuevoElemento);
    }
     // Asigna la función anade al evento click del botón
     var botonAñadir = document.getElementById('botonAnadir');
     botonAñadir.addEventListener('click', anade);
});
