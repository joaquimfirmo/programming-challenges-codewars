// Contar o número de duplicatas
// Escreva uma função que retornará a contagem de caracteres alfabéticos distintos que não 
// diferenciam maiúsculas de minúsculas e dígitos numéricos que ocorrem mais de uma vez na 
// string de entrada. A string de entrada pode conter apenas letras (maiúsculas e minúsculas) 
// e dígitos numéricos.

// Exemplo
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibilidade" -> 1 # 'i' occurs six times
// "Indivisibilidades" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


module.exports = (text) => {
    const splitString = text.toLowerCase().split("").sort();
    let results = [];
  
    for (let i = 0; i < splitString.length; i++) {
      if (splitString[i] === splitString[i + 1]) {
        results.push(splitString[i]);
      }
    }
   
    return new Set(results).size;
  };