// Um herói está a caminho do castelo para completar sua missão. 
// No entanto, ele foi informado de que o castelo está cercado por 
// alguns dragões poderosos! cada dragão leva 2 balas para ser derrotado, 
// nosso herói não tem ideia de quantas balas ele deve carregar. 
// Supondo que ele vai pegar um determinado número de balas e seguir e
// m frente para lutar contra outro número específico de dragões, ele sobreviverá?

// Retorna True se sim, False caso contrário :)

module.exports = (bullets, dragons) => bullets >= dragons * 2;
