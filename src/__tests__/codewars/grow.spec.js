const grow = require('../../arquivos/codewars/grow');


test("Deve multiplicar os valores em ordem do array passado como parametro da funcao", () => {

    const arr = [1, 2, 3];
    const arr2 = [4, 1, 1, 1, 4];
    const arr3 = [2, 2, 2, 2, 2, 2];
    expect(grow(arr)).toEqual(6);

    expect(grow(arr2)).toEqual(16);

    expect(grow(arr3)).toEqual(64)
})