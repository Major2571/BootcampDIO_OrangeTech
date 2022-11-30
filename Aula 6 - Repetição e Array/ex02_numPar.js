// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.


let numeros = [
    5, 10, 15, 20, 25
];

for (let i = 0; i < numeros.length; i++) {
    if ( numeros[i] % 2 === 0){
        console.log( numeros[i]);
    }
}

for (let i = 0; i < numeros.length; i++) {
    if ( numeros[i] % 2 === 0){
        console.log( numeros[i] + ' é par ');
    } else {
        console.log( numeros[i] + ' é impar ');
    }
}



