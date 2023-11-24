// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function () {
    // Número de enlaces de la página
    var numeroEnlaces = document.getElementsByTagName('a').length;
    console.log("Número de enlaces de la página:", numeroEnlaces);

    // Dirección a la que enlaza el penúltimo enlace
    var penultimoEnlace = document.querySelectorAll('a')[numeroEnlaces - 2].getAttribute('href');
    console.log("Dirección a la que enlaza el penúltimo enlace:", penultimoEnlace);

    // Numero de enlaces que enlazan a http://prueba
    var enlacesAPrueba = document.querySelectorAll('a[href="http://prueba"]').length;
    console.log("Número de enlaces que enlazan a http://prueba:", enlacesAPrueba);

    // Número de enlaces del tercer párrafo
    var tercerParrafo = document.getElementsByTagName('p')[2];
    var enlacesEnTercerParrafo = tercerParrafo.getElementsByTagName('a').length;
    console.log("Número de enlaces del tercer párrafo:", enlacesEnTercerParrafo);
});
