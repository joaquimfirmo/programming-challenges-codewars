const stringToNumber = require("../../arquivos/codewars/stringToNumber");


test("Deve retonar uma string em um número", () => {
    expect(stringToNumber ("12345")).toEqual(12345)
})