const squareSum = require("../../arquivos/codewars/squareSum");


test("Deve retornar a soma dos quadrados dos numeros passados como paramentro", () => {
    expect(squareSum([1, 2, 2])).toEqual(9)
    expect(squareSum([0, 3, 4, 5])).toEqual(50)
    expect(squareSum([0])).toEqual(0)
});