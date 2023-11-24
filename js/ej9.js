//mayus minus o ambas
console.log("ejercicio 9");

function a () {console.log("contiene solo MAYUS")}
function b () {console.log("contiene solo minus")}
function c () {console.log("contiene MAYUS y minus")}

const cadena = "HHH";

(cadena === cadena.toUpperCase()) ? a() : (cadena === cadena.toLowerCase()) ? b() : c()