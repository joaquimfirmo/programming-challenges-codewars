const abbrevName = require("../../files/codewars/abbrevName");

describe("Nome abreviado", () => {
  test(" Deve abreviar com as primerias letras de cada nome passado como paramentro", () => {
    expect(abbrevName("Joaquim Firmo")).toEqual("J.F");
  });
});
