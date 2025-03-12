// 2. Modele e implemente um método recursivo
// que calcule o somatório de um número n (passado como parâmetro) até 0.

// O que a função faz? Calcula o somatório de um número inteiro até 0
// Qual sua assinatura? int somatorio(int n) => somatorio de n até 0
// Casos de erro
// Não há
// Casos de parada não recursivos
// n === 0 -> 0
// Casos recursivos
//

function Somatorio(n) {
  if (n == 0) {
    return 0;
  }

  if (n > 0) {
    return n + Somatorio(n - 1);
  }

  if (n < 0) {
    return n + Somatorio(n + 1);
  }
}

console.log(Somatorio(0));
console.log(Somatorio(-3));
console.log(Somatorio(3));
