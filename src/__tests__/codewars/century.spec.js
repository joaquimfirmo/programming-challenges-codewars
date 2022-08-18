const century = require('../../arquivos/codewars/century')


describe("O seculo em que está", () => {
    test("Deve retornar o seculo 20, quando passado o ano 1998 como paramentro da funcao", () => {
        expect(century(2000)).toEqual(20)
    });
    
    test("Deve retornar o seculo 21, quando passado o ano 2022 como paramentro da funcao", () => {
        expect(century(2022)).toEqual(21)
    });

})
