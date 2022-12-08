// Calacular média de alunos (revisão 05/12)
// mais infos = https://javascript.info/array

const notas = []; // notas -> recebe um array

// add as notas
notas.push(5);
notas.push(6);
notas.push(7);
notas.push(8);
notas.push(9);

let somaNota = 0;

for (let i = 0; i < notas.length; i++) {
    // somaNota recebe a soma das notas contidas no array
    somaNota = somaNota + notas[i];
}

// calculo da média final do aluno
const mediaFinalAluno = somaNota / notas.length;

console.log(mediaFinalAluno);