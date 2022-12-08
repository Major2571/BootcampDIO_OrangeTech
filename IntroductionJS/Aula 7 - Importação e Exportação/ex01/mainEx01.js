const { gets, print } = require('./functionEx01');

const numero = 5;

for (let i = 0; i <= 10; i++) {
    let nMult = gets();
    const resultado = numero * nMult;
    print( numero + ' x ' + nMult + ' = ' + resultado)
}
