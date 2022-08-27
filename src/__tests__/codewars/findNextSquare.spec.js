const findNexSquare = require('../../files/codewars/findNextSquare')



describe("PROXIMO QUADRADO PERFEITO", () => {

    test("Deve retornar 144 como o proximo quadrado perfeito, quando passado 121 como paramentro da funcao", () => {
        expect(findNexSquare(121)).toEqual(144)
    });
    
    test("Deve retornar -1, pois 2 não é um quadrado perfeito como paramentro da funcao", () => {
        expect(findNexSquare(2)).toEqual(-1)
    });

})


