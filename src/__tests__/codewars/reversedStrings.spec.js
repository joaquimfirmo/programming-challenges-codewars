const reversedStrings = require('../../arquivos/codewars/reversedStrings');




test("Deve retornar a string invertida", () => {
    expect(reversedStrings("world")).toEqual("dlrow")
})