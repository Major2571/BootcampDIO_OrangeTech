/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/

const numeros = [5, 1, 3, 9, 10, 12];
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
