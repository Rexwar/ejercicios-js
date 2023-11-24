console.log("ejercicio 12 - Da2");

// Función para simular el lanzamiento de dos dados y contar las sumas
function simularLanzamientoDados() {
    var resultados = []; // Array para almacenar las sumas
    var conteoSumas = {}; // Objeto para contar las apariciones de cada suma

    // Realizar 36,000 lanzamientos
    for (var i = 0; i < 36000; i++) {
        // Lanzar dos dados (números entre 1 y 6)
        var dado1 = Math.floor(Math.random() * 6) + 1;
        var dado2 = Math.floor(Math.random() * 6) + 1;

        // Calcular la suma de los dados
        var suma = dado1 + dado2;

        // Almacenar la suma en el array de resultados
        resultados.push(suma);

        // Contar las apariciones de la suma en el objeto conteoSumas
        if (conteoSumas[suma]) {
            conteoSumas[suma]++;
        } else {
            conteoSumas[suma] = 1;
        }
    }

    // Mostrar los resultados
    console.log("Resultados de los lanzamientos:", resultados);
    console.log("Conteo de apariciones de cada suma:", conteoSumas);
}

// Llamar a la función para simular los lanzamientos de dados
simularLanzamientoDados();
