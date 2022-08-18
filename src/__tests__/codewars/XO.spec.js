const XO = require('../../arquivos/codewars/XO');

test('Deve retornar true ao passar uma string com mesmo numero de "xs" e "os" como paramentro da funcao',() => {
    const str = 'xoxoxoAA';

    expect(XO(str)).toBe(true)
})


test('Deve retornar false ao passar uma string com numero diferentes de "xs" e "os" como paramentro da funcao',() => {
    const str = 'oox';

    expect(XO(str)).toBe(false)
})

test('Deve retornar true ao passar uma string sem  "xs" e "os" como paramentro da funcao',() => {
    const str = 'zzz';

    expect(XO(str)).toBe(true)
})
