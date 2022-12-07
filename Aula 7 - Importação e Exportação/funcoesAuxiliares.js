
const entradas = [ 8, 5, 4, 3, 1, 9, 10, 2];
let i = 0;

function gets() {
  const valor = entradas[i];
  i++;
  return valor;
}

function print(texto) {
  console.log(texto);
}


module.exports = { gets, print };
