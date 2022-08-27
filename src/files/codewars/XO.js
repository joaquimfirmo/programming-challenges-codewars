
// Verifique se uma string tem a mesma quantidade de 'x's e 'o's. 
// O método deve retornar um booleano e não diferenciar maiúsculas de minúsculas. 
// A string pode conter qualquer char.

module.exports = (str) => {
    if(str.includes('x') ||  str.includes('o')) {
        let x = 0;
        let y = 0;
        str.split("").forEach((element)=> {
            if(/['xo']/i.test(element)) {
                element === 'x' ? x++ : y++
            }       
        });

        return x === y;
    }

    return true;
} 
