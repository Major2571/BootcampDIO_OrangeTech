
/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

let precoCombustivel = 4.68;
let kmPorLitros = 15;
let distanciaViagemKm = 39.7;


let litrosConsumidos = distanciaViagemKm / kmPorLitros;
let gastoTotal = litrosConsumidos * precoCombustivel;

console.log(gastoTotal.toFixed(2));



