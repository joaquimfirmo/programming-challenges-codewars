const makeNegative = require('../../files/codewars/makeNegative');


describe("Devolução Negativa", () => {

    test("Deve retorna o numero negativo, quando passado um numero positivo", () => {
        expect(makeNegative(42)).toEqual(-42)
    });

    test("Deve retorna o mesmo numero negativo, quando passado um numero negatio", () => {
        expect(makeNegative(-22)).toEqual(-22)
    })

})
