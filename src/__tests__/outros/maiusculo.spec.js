const maiusculo = require('../../arquivos/maiusculo');


test('Deve retornar a string passada como paramentro em maiúsculo', () => {
    expect(maiusculo('olá')).toEqual('OLÁ')
});

test(`Deve retornar 'Top' + a  string passada como paramentro em maiúsculo, se a mesma tive seu comprimento
     maior que 5`, () => {
    expect(maiusculo('joaquim neto')).toEqual('Top JOAQUIM NETO')
});
