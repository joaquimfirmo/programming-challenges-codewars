const isIsogram = require('../../files/codewars/isIsogram');

describe("É um Isograma", () => {
    test(" Deve retornar true se a string passada como paramentro for um isograma", () => {
        expect(isIsogram("Joaquim")).toEqual(true);  
        expect(isIsogram("Pernambuco")).toEqual(true);
    });

    test(" Deve retornar false se a string passada como paramentro não for um isograma", () => {
        expect(isIsogram("São Paulo")).toEqual(false);  
        expect(isIsogram("Emanoel")).toEqual(false);
    });
  });