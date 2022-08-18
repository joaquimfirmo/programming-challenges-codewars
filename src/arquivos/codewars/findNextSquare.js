// Você pode conhecer alguns quadrados perfeitos bem grandes. Mas e o PRÓXIMO?
// Complete o findNextSquaremétodo que encontra o próximo quadrado perfeito integral 
// após o passado como parâmetro. Lembre-se de que um quadrado perfeito integral é um inteiro n tal que sqrt(n) 
// também é um inteiro.
// Se o parâmetro em si não for um quadrado perfeito, -1deverá ser retornado. Você pode assumir que o parâmetro é não negativo.


module.exports  = (n) => {
    if(Math.sqrt(n) % 1 === 0){
        let a = true;
        while(a){
            n++;
            Math.sqrt(n) % 1 === 0 ? a = false : a = true;
        }
        return n
    }else{
        return -1
    }

}