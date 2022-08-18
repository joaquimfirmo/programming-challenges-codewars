const hero =  require("../../arquivos/codewars/hero");


test("Deve retornar true, se o numeros de balas do heroi foi o dobro do numero de dragoes", () => {
    expect(hero(10, 5)).toBe(true)
})