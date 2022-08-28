const bmi = require('../../files/codewars/bmi');

describe("BMI (IMC)", () => {
    test(" Deve retornar a categoria no bmi (IMC) do  valor (altura e peso) passados como paramentro", () => {
      expect(bmi(58, 1.79)).toEqual('Underweight');
      expect(bmi(68,1.79)).toEqual('Normal');
      expect(bmi(168,1.79)).toEqual('Obese');
      expect(bmi(95,1.79)).toEqual('Overweight');
    });
  });