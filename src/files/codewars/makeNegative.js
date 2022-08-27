// Nesta tarefa simples, você recebe um número e deve torná-lo negativo. 
// Mas talvez o número já seja negativo?

module.exports = (num) => num > 0 ? num - (num + num) : num;