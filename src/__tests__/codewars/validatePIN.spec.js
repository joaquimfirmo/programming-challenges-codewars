const validatePIN = require("../../files/codewars/validatePIN");


describe("VALIDACAO DE CODIGOS PIN", () => {
    test("Deve retornar true, quando passado códigos PIN de 4 ou 6 dígitos", () => {
        expect(validatePIN("1234")).toBe(true)  
    }); 
    
    test("Deve retornar false, quando passado códigos PIN de 5 dígitos", () => {
        expect(validatePIN("12345")).toBe(false)
    });
})
