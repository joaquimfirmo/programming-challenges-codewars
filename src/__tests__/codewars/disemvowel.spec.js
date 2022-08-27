const disemvowel = require("../../files/codewars/disemvowel");


test("Deve retornar a string passado como paramento sem as vogais ", () => {
    expect(disemvowel("This website is for losers LOL!")).toEqual("Ths wbst s fr lsrs LL!")
})