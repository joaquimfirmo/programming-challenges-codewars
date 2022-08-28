const vuexFunctions = require('../../files/vuexFunctions');

test("Teste requere Vuex Funções.", () => {
    expect(vuexFunctions(['a','b','c']).a()).toEqual('Função A');
    expect(vuexFunctions(['a','b']).b()).toEqual('Função B'); 
    expect(vuexFunctions(['c'])).toEqual({});     
   
});