const obj1 = {
    nome: "Joaquim",
    idade: 25,
    sexo: "M",
    origem: "Brasil"
}

const obj2 = {
    eva: '05',
    cor: "Verde"
}

module.exports = (obj1, obj2, condition) => {
    return {
        ...obj1,
        ...(condition ? obj2 : {})
    }
}