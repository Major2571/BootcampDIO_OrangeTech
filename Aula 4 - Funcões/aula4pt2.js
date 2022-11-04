/*
IMC - com Funções

Formula do IMC:
IMC = peso / (altura * altura)

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;

*/

// cria-se uma função para nossa fórmula, para não precisar ficar digitando a fórmula sempre que necessário
function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

// criamos também a função que irá ter nossas classificações, usando o return ao invés de console.log
function classificarImc(imc){
    if (imc < 18.5) {
        return (" Seu IMC é de: " + imc.toFixed(2) + " \n Você está Abaixo do peso.");

    } else if (imc >= 18.5 && imc <= 25) {
        return (
            " Seu IMC é de: " + imc.toFixed(2) + " \n Você está com Peso adequado."
        );

    } else if (imc > 25 && imc <= 30) {
        return (
            " Seu IMC é de: " + imc.toFixed(2) + " \n Você está Acima do peso."
        );

    } else if (imc > 30 && imc <= 40) {
        return (
            " Seu IMC é de: " + imc.toFixed(2) + " \n Você está Obeso."
        );

    } else {
        return (
            " Seu IMC é de: " + imc.toFixed(2) + " \n Você está com Obesidade Gave."
        );
    }
}

// e nossa main, ela comporta as demais funções, nos trazendo as informações/funções que forem chamadas
function main(){
    let peso = 70;
    let altura = 1.70;
    let imc = calcularImc(peso, altura); // função que traz a formula, passando como paramentro os valores que atribuinos nas respectivas variáveis
    
    console.log(
        classificarImc(imc) // função que irá trazer/exibir nosso imc + classificação 
    );
}
main(); // finalmente chamamos nossa função para execução

// se a gente consegue isolar o trecho do código, ou seja, fazer uma função, isola ele! :)



/*
    Função Imediatamente Invocada -> ela é criada e se auto-executa
        -> colocamos ela entre parenteses;
        -> assim como na matemática, onde os () resolvemos primeiro, o programa resolve o que tá lá dentro primeiro e assume o valor;
        -> como é auto-executada não presisamos nomea-lá, assim como não é necesssario chama-lá;
        -> os () no final servem para invoca-lá;
        -> só existe dentro dos ();

        --> ou seja, ela é o nosso main, que sempre será executada nas págs web <--
*/

(function (){
    let peso = 70;
    let altura = 1.70;
    let imc = calcularImc(peso, altura);
    
    console.log(
        "\n Função Imediatamente Invocada \n" +
        classificarImc(imc)
    );
})();

