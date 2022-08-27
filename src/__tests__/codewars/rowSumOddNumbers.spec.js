const rowSumOddNumbers = require('../../files/codewars/rowSumOddNumbers');


test("Deve calcular a soma dos números na enésima linha deste triângulo", () => {
  
    expect(rowSumOddNumbers(5)).toEqual(125)
    expect(rowSumOddNumbers(42)).toEqual(74088)
})
