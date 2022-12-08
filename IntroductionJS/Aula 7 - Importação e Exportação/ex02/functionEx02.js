/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4 (????)
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90 (????)
*/

const numeros = [4, 100, 150, 90, 200];
let i = 0;

function gets() {
  const entrada = numeros[i];
  i++;
  return entrada;
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print };
