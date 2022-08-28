const mergeObj = require('../../files/mergeObj');


describe("Merge Objetos", () => {
    test("Deve fazer o merge dos dois objetos passados como paramentros, caso o 3 paramentro seja true.", () => {
        expect(mergeObj({nome:'Joaquim', sobrenome: "Firmo"}, {sexo: 'M', idade: 25}, true)).toEqual(
            {nome:'Joaquim', sobrenome: "Firmo", sexo: 'M', idade: 25});         
    });

    test("Não deve fazer o merge dos dois objetos passados como paramentros, caso  o 3 paramentro seja true.", () => {
        expect(mergeObj({nome:'Joaquim', sobrenome: "Firmo"}, {sexo: 'M', idade: 25, altura: 158}, false)).toEqual(
            {nome:'Joaquim', sobrenome: "Firmo"});  
       
    });
  });