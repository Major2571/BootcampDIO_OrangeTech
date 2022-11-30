// um Objeto em JS é uma coleção dinamica de chave e valor

// const pessoa = {
//     nome: 'Vitor',
//     idade: 25,

//     descrever: function() {
//         // usar crase invés de aspas
//         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
//     }
// };



// classe é a definição do que deve ser aquele objeto
class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

// instancia é uma ocorrencia daquele objeto
const vitor = new Pessoa();
      vitor.nome = 'Vitor Guerra';
      vitor.idade = 25;

// com o constructor
const renan = new Pessoa('Renan Paula', 23);
const maria = new Pessoa('Maria Souza', 24);


vitor.descrever();
renan.descrever();
maria.descrever();
