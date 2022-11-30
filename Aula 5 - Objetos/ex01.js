class Carro {

    marca;
    cor;
    gastoMedioPorKM;

    constructor( marca, cor, gastoMedioPorKM ){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularGastoViagem( distanciaEmKM, precoCombustivel ){
        return (distanciaEmKM  * this.gastoMedioPorKM) * precoCombustivel;
    }

};

const uno = new Carro( 'Fiat', 'Preto', 1 / 12 );
console.log(uno.calcularGastoViagem(70, 5));
const palio = new Carro( 'Fiat', 'Prata', 1 / 10 );
console.log(palio.calcularGastoViagem(70, 5));