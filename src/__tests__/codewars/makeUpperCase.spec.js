const makeUpperCase = require("../../files/codewars/makeUpperCase");



test("Deve converter a string de entrada para maiusculo", () => {
    expect(makeUpperCase("neto")).toEqual("NETO")
    expect(makeUpperCase("joaquim firmo")).toEqual("JOAQUIM FIRMO")
})