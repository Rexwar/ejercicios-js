console.log("ejercicio 10 - palindromo");

const palindromoDeEjemplo = "La ruta nos aporto otro paso natural"

function esPalindromo(string){
    //console.log(string[1])
    string = string.replace(/\s/g, '').toLowerCase();
    var reves = ''
    var largo = string.length
    for (i = largo-1; i>=0 ;i--){
        reves+= string[i]
    }
    console.log(reves)
    console.log(string)
    if (string === reves){
        console.log("es PAL")
    }else{
        console.log("NO es PAL")
    }

}

esPalindromo(palindromoDeEjemplo)