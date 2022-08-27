const reverseSeq = require('../../files/codewars/reverseSeq');

describe('Sequencia reversa', () =>{
    test('Deve retorna a sequencia regressiva do numero passado como paramentro', () =>{
        expect(reverseSeq(5)).toEqual([5,4,3,2,1])
    });
});

