// Escreva a função bmi que calcula o índice de massa corporal (bmi = peso/altura 2 ).

// se bmi <= 18,5 retornar "Abaixo do peso"

// se bmi <= 25,0 retorna "Normal"

// se bmi <= 30,0 retornar "Excesso de peso"

// se IMC > 30 retorna "Obeso"

module.exports = (weight, height) => {
    const result = weight / (height * height);
     if(result <= 18.5) return "Underweight";
     else if(result <= 25.0) return "Normal";
     else if(result <= 30.0) return "Overweight";
     else
     return "Obese";
 }
 