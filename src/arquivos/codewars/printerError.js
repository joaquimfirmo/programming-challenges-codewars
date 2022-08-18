//Em uma fábrica, uma impressora imprime etiquetas para caixas. Para um tipo de caixa, a impressora deve usar cores que, 
// para simplificar, são nomeadas com letras de a to m. As cores usadas pela impressora são registradas em uma string de 
// controle. Por exemplo, uma string de controle "boa" aaabbbbhaijjjmsignificaria que a impressora usou três vezes a cor a, 
// quatro vezes a cor b, uma vez a cor h e uma vez a cor a ... Às vezes há problemas: falta de cores, mau funcionamento técnico 
// e uma string de controle "ruim" é produzida, por exemplo aaaxbbbbyyhwawiwjjjwwm, com letras que não são de a to m.
// Você tem que escrever uma função printer_errorque dada uma string retornará a taxa de erro da impressora como uma string 
// representando um racional cujo numerador é o número de erros e o denominador o comprimento da string de controle. Não reduza e
// sta fração a uma expressão mais simples.
// A string tem um comprimento maior ou igual a um e contém apenas letras de aaté z. 

module.exports = (str) => {
    let errors = 0;
    str.split("").forEach((element)=> {
        /['abcdefghijklm']/.test(element) || errors++       
    });
    return `${errors}/${str.length}`;
}