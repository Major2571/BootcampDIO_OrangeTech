/*

2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;

*/

let peso = 70;
let altura = 1.70;
//let imc = peso / (altura * altura);
let imc = peso / Math.pow( altura, 2 )
// usamos a Biblioteca JS para fazer as potencias

    if (imc < 18.5) {
        console.log(" Seu IMC é de: " + imc.toFixed(2) + " \n Você está Abaixo do peso.");

    } else if (imc >= 18.5 && imc <= 25) {
        console.log(
            " Seu IMC é de: " + imc.toFixed(2) + " \n Você está com Peso adequado."
        );

    } else if (imc > 25 && imc <= 30) {
        console.log(
            " Seu IMC é de: " + imc.toFixed(2) + " \n Você está Acima do peso."
        );

    } else if (imc > 30 && imc <= 40) {
        console.log(
            " Seu IMC é de: " + imc.toFixed(2) + " \n Você está Obeso."
        );

    } else {
        console.log(
            " Seu IMC é de: " + imc.toFixed(2) + " \n Você está com Obesidade Gave."
        );
    }