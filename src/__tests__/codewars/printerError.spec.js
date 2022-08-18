const printerError = require("../../arquivos/codewars/printerError")



describe("Printer Erros testes",() => {
    test("Deve retornar 0/14, quando passado a string  str com todos os 14 caracteres validos", () => {
        const str = "aaabbbbhaijjjm";
        expect(printerError(str)).toEqual('0/14')
    });
    
    
    test("Deve retornar 6/20, quando é passado a string  str com 6 dos 20 caracteres invalidos", () => {
        const str = "aaabbbbhaijjjmXUyKLL";
        expect(printerError(str)).toEqual('6/20')
    });


})

