class Pessoas {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / Math.pow(this.altura, 2);
  }

  classificarIMC() {
    const imc = this.calcularIMC();

    if (imc < 18.5) {
      return this.nome + " seu IMC é de: " + imc.toFixed(2) + " você está Abaixo do peso.";
    } 
    else if (imc >= 18.5 && imc <= 25) {
      return this.nome + " seu IMC é de: " + imc.toFixed(2) + " você está com Peso adequado.";
    } 
    else if (imc > 25 && imc <= 30) {
      return this.nome + " seu IMC é de: " + imc.toFixed(2) + " você está Acima do peso.";
    } 
    else if (imc > 30 && imc <= 40) {
      return this.nome + " seu IMC é de: " + imc.toFixed(2) + " você está Obeso.";
    } 
    else {
      return this.nome + " seu IMC é de: " + imc.toFixed(2) + " você está com Obesidade Gave.";
    }
  }
}

const theo = new Pessoas("Theo", 50, 1.75);
console.log(theo.classificarIMC());

const jose = new Pessoas("José", 70, 1.75);
console.log(jose.classificarIMC());

const vitor = new Pessoas("Vitor", 75, 1.7);
console.log(vitor.classificarIMC());

const pedro = new Pessoas("Pedro", 105, 1.85);
console.log(pedro.classificarIMC());

const davi = new Pessoas("Davi", 130, 1.7);
console.log(davi.classificarIMC());
