
// Dada uma matriz não vazia de inteiros, 
// retorne o resultado da multiplicação dos valores em ordem.


module.exports = (numbers) => numbers.reduce((previousValue, currentValue) => previousValue * currentValue);