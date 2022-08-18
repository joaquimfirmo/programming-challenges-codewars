const subtracao = require('../../arquivos/subtracao');

test('Deve subtrair dois números', () => {
    expect(subtracao(2,1)).toBe(1);
});