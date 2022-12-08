const { gets, print } = require('./functionEx03');

const numero = gets();
let numeroPar = [];


for (let i = 0; i < numero; i++) {
    const arrayNumeros = gets();

    if ( arrayNumeros % 2 === 0 ){
        numeroPar.push(arrayNumeros);
    } 
    
}

print( ' Números Pares: ' + numeroPar );