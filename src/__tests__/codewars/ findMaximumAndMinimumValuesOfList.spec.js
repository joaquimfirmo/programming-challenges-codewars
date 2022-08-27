const findMaximumAndMinimumValuesOfList = require("../../files/codewars/ findMaximumAndMinimumValuesOfList");

describe("Buscar o maior e o menor número de uma  lista", () => {
    test(" Deve buscar o maior número da lista passada como paramentro", () => {

      expect(findMaximumAndMinimumValuesOfList.max([1.25,78,7,9,100,-1, 250])).toEqual(250);  
      
    });

    test(" Deve buscar o menor número da lista passada como paramentro", () => {

      expect(findMaximumAndMinimumValuesOfList.min([1.25,78,7,9,100,-1, -250])).toEqual(-250);  
      
    });
  });
  