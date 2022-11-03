/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

let nota1 = 5;
let nota2 = 10;
let nota3 = 10;

const media = ( nota1 + nota2 + nota3 ) / 3;

if ( media < 5 ){
    console.log(" Sua média foi de: " + media.toFixed(1) + "\n Você está reprovado!")
} else if ( media >= 5 && media <=7 ) {
    console.log(" Sua média foi de: " + media.toFixed(1) + "\n Você está de recuperação!")
} else if ( media >7 && media <=10 ){
    console.log(" Sua média foi de: " + media.toFixed(1) + "\n Parabéns! Você foi Aprovado!")
} else {
    console.log( " Nota Inválida! ")
}