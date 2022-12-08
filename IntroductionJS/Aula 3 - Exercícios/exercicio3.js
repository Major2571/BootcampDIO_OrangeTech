/* 

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
    1 - À vista Débito, recebe 10% de desconto;
    2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3 - Em duas vezes, preço normal de etiqueta sem juros;
    4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

let precoProduto = 50;
let formaDePagamento = 4;

let desconto = 0.0;
let juros = 0.0;
let pagamentoTotal = 0.0;

    if ( formaDePagamento === 1 ) {
        desconto = 0.10;
        pagamentoTotal = precoProduto - ( precoProduto * desconto );

        console.log(
            " Valor total a pagar R$ " + pagamentoTotal.toFixed(2)
        );

    } else if ( formaDePagamento === 2 ) {
        desconto = 0.15;
        pagamentoTotal = precoProduto - ( precoProduto * desconto );

        console.log(
            " Valor total a pagar R$ " + pagamentoTotal.toFixed(2)
        );

    } else if ( formaDePagamento === 3 ) {
        console.log(
            " Valor total a pagar R$ " + precoProduto.toFixed(2)
        );

    } else {
        juros = 0.10;
        pagamentoTotal = precoProduto + ( precoProduto * juros );

        console.log(
            " Valor total a pagar R$ " + pagamentoTotal.toFixed(2)
        );
    }