const isSquare = require('../../arquivos/codewars/isSquare');

describe('Raiz quadrada', () => {
  test("Deve retornar 'true' quando passado um numero que tem a raiz quadrada perfeita", () => {
      expect(isSquare(4)).toEqual(true)
    });
    
    test("Deve retornar 'false' quando passado um numero que não tem a raiz quadrada perfeita", () => {
        expect(isSquare(15)).toEqual(false)
    });

});
