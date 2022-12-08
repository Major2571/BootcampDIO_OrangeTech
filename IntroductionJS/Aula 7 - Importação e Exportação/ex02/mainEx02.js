const { gets, print } = require('./functionEx02');

const numero = gets();
let maiorNumero = 0;
let menorNumero = 0;

for (let i = 0; i < numero; i++) {
    const arrayNumeros = gets();

    if ( arrayNumeros > maiorNumero ){
        maiorNumero = arrayNumeros;
    } 
    else if ( arrayNumeros < maiorNumero ) {
        menorNumero = arrayNumeros;
    }
    
}

print( ' Maior número: ' + maiorNumero + '\n Menor número: ' + menorNumero);