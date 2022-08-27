const alphabetPosition = require("../../files/codewars/alphabetPosition");

describe("Posição de cada letra no alfabeto", () => {
    test(" Deve retornar a posição no alfabeto de cada letra presente na string passada como paramentro", () => {
      expect(alphabetPosition("Joaquim")).toEqual('10 15 1 17 21 9 13');
    });
  });