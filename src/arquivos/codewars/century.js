// O primeiro século abrange desde o ano 1 até e incluindo o ano 100, 
// o segundo século - do ano 101 até e incluindo o ano 200, etc.

// Tarefa
// Dado um ano, retorne o século em que está.


module.exports = (year) => (year / 100) % 1 === 0  ? (year / 100) : Math.floor(( year / 100)) + 1;