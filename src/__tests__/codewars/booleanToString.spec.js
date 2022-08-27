const booleanToString = require('../../files/codewars/booleanToString');


describe("Converter valor boleano para string", () => {
    test(" Deve retornar a string 'true' quando o valor passado como paramentro seja um valor 'verdadeiro'", () => {
      expect(booleanToString(170)).toEqual('true');
      expect(booleanToString(true)).toEqual('true');
      expect(booleanToString('true')).toEqual('true');
    });

    test(" Deve retornar a string 'false' quando o valor passado como paramentro seja um valor 'falso'", () => {
        expect(booleanToString(null)).toEqual('false');
        expect(booleanToString('')).toEqual('false');
        expect(booleanToString(0)).toEqual('false');
      });
  });