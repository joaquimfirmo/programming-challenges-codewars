 // Trolls estão atacando sua seção de comentários!
// Uma forma comum de lidar com essa situação é remover todas 
// as vogais dos comentários dos trolls, neutralizando a ameaça.
// Sua tarefa é escrever uma função que receba uma string e retorne uma nova string com todas as vogais removidas.
// Por exemplo, a string "Este site é para perdedores LOL!" se tornaria "Ths wbst s fr lsrs LL!".

module.exports = (str) => str.replace(/(a|e|i|o|u)/gi,'');