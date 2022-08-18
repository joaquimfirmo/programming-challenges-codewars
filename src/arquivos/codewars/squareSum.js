// Complete a função que soma o quadrado de cada número passado para ela.

// Por exemplo, se for [1, 2, 2] deve retornar 9porque 1^2 + 2^2 + 2^2 = 9.

module.exports = (numbers) => numbers.reduce((previousValue, currentValue) => previousValue + Math.pow(currentValue,2),0);


