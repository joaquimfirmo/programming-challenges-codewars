const vuexFunctionsSimu = require('../../arquivos/vuexFunctionsSimu');

test('Deve retorna todas funções presentes no array "getFunctions"', () => {
    getFunctions = ['a','b'];

    expect(vuexFunctionsSimu(getFunctions)).toHaveProperty('a');
    expect(vuexFunctionsSimu(getFunctions)).toHaveProperty('b');
    expect(typeof vuexFunctionsSimu(getFunctions).a).toBe("function");
    expect(typeof vuexFunctionsSimu(getFunctions).b).toBe("function");
    


})

const a = { 'a' : [jest.fn]}

test('Não deve retornar a função presente no array "getFunctions".', () => {
    getFunctions = ['c'];
    expect(vuexFunctionsSimu(getFunctions)).not.toHaveProperty('c');


})

test('Deve retornar o tipo correto ao executa as função presente no array "getFunctions".', () => {
    getFunctions = ['a','b'];
    expect(typeof vuexFunctionsSimu(getFunctions).a()).toBe("string");
    expect(typeof vuexFunctionsSimu(getFunctions).b()).toBe("string");


})