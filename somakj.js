//4 - Modele e implemente um método recursivo que calcule o somatório dos números inteiros entre os números k e j, passados como parâmetro.

// O que a função faz? Calcula o somatório de dois números inteiros
// Qual sua assinatura? int somatorio(int k, int j) => somatorio de k até j

function somakj(k, j) {
  if (k === 0) {
    return j;
  }

  if (j === 0) {
    return k;
  }

  if (k < j) {
    return j + somakj(k, j + 1);
  }
}

console.log(somakj(2, 4));
