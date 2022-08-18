const multiplicacao = require('../../arquivos/multiplicacao');


test('Deve multiplicar dois numeros', () => {
    expect(multiplicacao(2,4)).toBe(8)
}); 