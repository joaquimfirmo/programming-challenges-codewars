const duplicateCount = require('../../files/codewars/duplicateCount');


describe("Caracteres duplicados", () => {
    test(" Deve retornar o número de caracteres duplicados presentes na string passada como paramentro", () => {
        expect(duplicateCount("aBB11")).toEqual(2);   
        expect(duplicateCount("Joaquim Firmo")).toEqual(3);
    });
  });

