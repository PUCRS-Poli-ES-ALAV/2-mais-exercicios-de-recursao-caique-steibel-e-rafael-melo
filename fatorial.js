// 1. Modele e implemente um método recursivo que calcule o fatorial
// de um número n passado como parâmetro.

// O que a função faz? Calcula fatorial de um número inteiro
// Qual sua assinatura? int fatorial(int n) => fatorial de n
// Casos de erro
// n < 0
// Casos de parada não recursivos
// n === 0 -> 1
// n === 1 -> 1
// Casos recursivos
//

function Fatorial(n) {
  if (n < 0) {
    return console.log("Valor menor que 0");
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return Fatorial(n - 1) * n;
}

console.log(Fatorial(-1));
console.log(Fatorial(5));
