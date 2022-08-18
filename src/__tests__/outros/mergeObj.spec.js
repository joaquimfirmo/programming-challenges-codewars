const mergeObj = require("../../arquivos/mergeObj");

test('Deve unir dois objetos quando a condição "terceiro paramentro" for verdadeira', () => {
  const piloto = {
    nome: "Joaquim",
    idade: 25,
    pais: "Brasil",
  };

  const evangelion = {
    eva: 5,
    cor: "Verde",
  };

  const condition = true;

  expect(
    mergeObj(piloto, evangelion, condition)
  ).toEqual({
    nome: "Joaquim",
    idade: 25,
    pais: "Brasil",
    eva: 5,
    cor: "Verde",
  });
});

test('Deve retornar apenas o objeto do piloto quando a condição,o "terceiro paramentro" for false', () => {
    const piloto = {
      nome: "Joaquim",
      idade: 25,
      pais: "Brasil",
    };
  
    const evangelion = {
      eva: 5,
      cor: "Verde",
    };
  
    const condition = false;
  
    expect(
      mergeObj(piloto, evangelion, condition)
    ).toEqual(piloto);
  });
