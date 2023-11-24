// 1. Expresión regular para validar una fecha en formato "XX/XX/XXXX":
var expresionFecha = /\b\d{2}\/\d{2}\/\d{4}\b/;
var textoFecha = "Nací el 05/04/1982 en Donostia.";
console.log(expresionFecha.test(textoFecha)); // Devolverá true si la fecha es válida en el formato dado

// 2. Expresión regular para validar una dirección de email:
var expresionEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
var email = "usuario@dominio.com";
console.log(expresionEmail.test(email)); // Devolverá true si la dirección de email es válida

// 3. Reescritura de la función escapeHTML con expresiones regulares:
function escapeHTML(text) {
    var replacements = [["&", "&amp;"], ["\"", "&quot;"], ["<", "&lt;"], [">", "&gt;"]];
    replacements.forEach(function(replace) {
        var regex = new RegExp(replace[0], "g");
        text = text.replace(regex, replace[1]);
    });
    return text;
}

var textoPrueba = '<p>Este es un "texto" con <script>alert("Hola");</script>.</p>';
var textoEscapado = escapeHTML(textoPrueba);
console.log(textoEscapado);


// 4. Expresión regular para invertir el orden de nombre y apellido, separados por una coma:
var expresionInvertirNombreApellido = /^(\w+)\s(\w+)$/;
var nombreCompleto = "John Smith";
var invertido = nombreCompleto.replace(expresionInvertirNombreApellido, "$2, $1");
console.log(invertido); // Devolverá "Smith, John"




// 5. Expresión regular para eliminar etiquetas <script> y su contenido de una cadena HTML:
var expresionEliminarScript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/
