function factorial(n){
    fac = n
    for (i = n ; i>1; --i){
        fac*=i-1
    }
    return fac
}

const numero = 4


console.log("el factorial de",numero,"es", factorial(numero))