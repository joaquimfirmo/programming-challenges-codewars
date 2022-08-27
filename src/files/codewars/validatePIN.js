// As máquinas ATM permitem códigos PIN de 4 ou 6 dígitos e os códigos PIN 
// não podem conter nada além de exatamente 4 dígitos ou exatamente 6 dígitos.
// Se a função receber uma string de PIN válida, return true, senão return false.

module.exports = (pin) => /^([0-9]{4}|[0-9]{6})$/.test(pin);
