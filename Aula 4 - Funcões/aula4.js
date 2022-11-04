/* Funções -> são pequenos trechos de código que a gente pode 'invocar' a qualquer momento que desejamos; devemos defini-la em algum lugar no escopo

Sua sintaxe:
function + nome + (parâmetro / argumentos) + { código }
function teste() {
    console.log('teste');
}

-> para chamar nossa função usamos o seu nome + ( parametro )
teste();

----------------------------------------------

function sayMyName(name) {
    console.log('Your name is ' + name);
}

sayMyName('Carol');

----------------------------------------------

function quadrado(valor) {
    return valor * valor; 
}
    -> preciso do return pra ele devolver esses dados, se não ele vai 'guardar' esses dados na função e vai deixar lá! 

console.log(quadrado(10));

----------------------------------------------

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(50, 10));
console.log(incrementarJuros(50, 15));
console.log(incrementarJuros(50, 20));

*/

// Organização de código
// Vamos declarar nossas diversas funções, mas a nossa Função Principal, que vai chamar as demais, vai ser a main;

function quadrado(numero){
    return Math.pow(numero, 2);
}

function main() {
    console.log('Principal');
    console.log(quadrado(5));
}

main();
