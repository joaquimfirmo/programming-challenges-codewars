// Um isograma é uma palavra que não tem letras repetidas, consecutivas ou não consecutivas. 
// Implemente uma função que determina se uma string que contém apenas letras é um isograma. 
// Suponha que a string vazia seja um isograma. Ignorar maiúsculas e minúsculas.


module.exports = (str) => !/(\w).*\1/i.test(str);

 //const isIsogram = (str) => new Set(str.toUpperCase()).size == str.length;