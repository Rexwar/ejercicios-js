var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

const div = 23
const max = 99999999
const min = 0


var dni_Ingresado = 19537900
var letra_Ingresada = "K"

var letra = '';

(dni_Ingresado<=min)?
    console.log("DNI invalido")
:
    letra = calcular(dni_Ingresado)
    


function calcular (DNI){

    var resto = DNI%div
    console.log(resto)
    var letraDNI = letras[resto]
    console.log(letra)
    return letraDNI
};

(letra == letra_Ingresada) ? console.log("el numero y letra ingresados son correctos") : console.log("letra indicada no es correcta")

