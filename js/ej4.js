var valores = [true, 5, false, "hola", "adios", 2];

// 1- det cual elemento texto es mayor
const largoHola = valores[3].length
const largoAdios = valores[4].length

var largoMayor = 0

if (largoAdios > largoHola) {
    console.log("Adios es mayor");
    largoMayor = largoAdios
}else{
    console.log("hola es mayor");
    largoMayor = largoHola
}

console.log(largoMayor);
//-- ternario 
console.log("ternario")

var largoMayor = (largoAdios > largoHola) ? (console.log("Adios es mayor"), largoAdios) : (console.log("Hola es mayor"), largoHola);
console.log(largoMayor);

//------------

// 2- 
console.log(valores[0] && valores[2]) // T y F = F

console.log(valores[0] || valores[2]) // T o F = T

// 3- 

var num1 = valores[1]; // 5
var num2 = valores[5]; // 2

var suma = num1 + num2; // Suma
var resta = num1 - num2; // Resta
var multiplicacion = num1 * num2; // Multiplicación
var division = num1 / num2; // División
var modulo = num1 % num2; // Módulo

