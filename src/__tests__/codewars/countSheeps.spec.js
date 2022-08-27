const countSheeps = require("../../files/codewars/countSheeps");

describe('Contando carneirinhos', () =>{
  test(`Deve contar todos os carneirinhos (valor : true) 
        no array passado como paramentro da função`, () => {
  const array = [true, true, false, true];
  expect(countSheeps(array)).toBe(3);
});

});



