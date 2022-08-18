const soma = require('../../arquivos/soma');

test('Deve somar dois numeros', () => {
    expect(soma(1,2)).toBe(3);
});

