// Sua tarefa é fazer duas funções ( maxe min, ou maximume minimum, etc., 
// dependendo do idioma ) que recebam uma lista de inteiros como entrada e 
// retornem o maior e o menor número dessa lista, respectivamente.


module.exports = {
    min(list) {
        return Math.min(...list);
    },
    max(list){
        return Math.max(...list);
    }
}
