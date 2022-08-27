const stringToArray = require('../../files/codewars/stringToArray');

describe("String para Array", () => {
    test(" Deve converter a string passada como paramentro em um array", () => {
        expect(stringToArray("Joaquim Firmo")).toEqual(['Joaquim', 'Firmo']);  
       
    });
  });