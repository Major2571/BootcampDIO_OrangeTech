
const alunos = [
    'João',
    'Vitor',
    'Marina'
];

// add mais informações ao final -> push
alunos.push('Renan');

// pode-se substituir um valor
alunos[3] = 'Vinícius';

// remover o ultimo item ( Vinícius )
alunos.pop();

// remover o primeiro item (João)
alunos.shift();

// contar quantos registros tem ( retorna - 2 )
alunos.length;

console.log(alunos);