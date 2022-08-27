const basicOp = require('../../files/codewars/basicOp');


describe("Operações básicas", () => {
    test('Deve realizar a operação de soma corretamente', () => {
        expect(basicOp('+', 4, 6)).toEqual(10)
    });
    
    test('Deve realizar a operação de subtração corretamente', () => {
        expect(basicOp('-', 4, 3)).toEqual(1)
    });
    
    test('Deve realizar a operação de multiplicação corretamente', () => {
        expect(basicOp('*', 10, 5)).toEqual(50)
    });
    
    test('Deve realizar a operação de divisão corretamente', () => {
        expect(basicOp('/', 4, 2)).toEqual(2)
    });

});
