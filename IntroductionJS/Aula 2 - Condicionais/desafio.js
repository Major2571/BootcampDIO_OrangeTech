/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoEtanol = 3.5;
const precoGasolina = 4.7;

let gastoMedioPorKM = 10;
let distanciaViagemKM = 100;
let tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaViagemKM / gastoMedioPorKM;

if (tipoCombustivel === 'Gasolina') {
    const gastoTotal = litrosConsumidos * precoGasolina;
    console.log("Gasto total = R$ " + gastoTotal.toFixed(2));
} else {
    const gastoTotal = litrosConsumidos * precoEtanol;
    console.log("Gasto total = R$ " + gastoTotal.toFixed(2));
}

