const doubleInteger = require('../../files/codewars/doubleInteger')


describe("O Dobro", () => {
    test(" Deve retonar o dobro do valor passado como paramentro", () => {
      expect(doubleInteger(2)).toEqual(4);
      expect(doubleInteger(4)).toEqual(8);
      expect(doubleInteger(8)).toEqual(16);
    });
  });