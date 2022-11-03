
let numero = 10;
let numeroEhPar = numero % 2 === 0; // retorna como true ou false

if (numero === 0) {
    console.log("Inválido!")
} else if (numeroEhPar) { // if -> true
    console.log(numero + " é par!")
} else { // else -> false
    console.log(numero + " é impar!")
}

