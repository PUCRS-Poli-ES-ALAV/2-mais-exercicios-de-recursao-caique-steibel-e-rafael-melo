// 1. Modele e implemente um método recursivo
// que calcule o n-ésimo número da sequência de fibonacci.

// O que a função faz? Calcula o fibonacci de um inteiro
// Qual sua assinatura? int fibonacci(int n) => somatorio de n até 0
// Casos de erro
// Não há
// Casos de parada não recursivos
// n === 0 -> 0
// Casos recursivos
//

function fibo(n) {
  if (n < 0) {
    console.log("Valor menor que 0");
    return null;
  }

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(-3));
console.log(fibo(3));
console.log(fibo(20));
