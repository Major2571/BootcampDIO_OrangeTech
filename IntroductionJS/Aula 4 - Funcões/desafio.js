/*
function sayMyName(name) {
    return name
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(sayMyName('alguém') + ' é maior')
    } else {
        console.log(sayMyName('alguém') + ' é menor')
    }
}
verificarIdade(19);

------------------------------------- */

// EX 3 com funções

function aplicarDesconto(precoDoProduto, desconto) {
    return (precoDoProduto - (precoDoProduto * (desconto / 100)));
}

function aplicarJuros(precoDoProduto, juros) {
    return (precoDoProduto + (precoDoProduto * (juros / 100)));
}

let precoEtiqueta = 50;
let formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10)); 
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}



