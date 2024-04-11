function bmi(weight, height) {
    let bmi = weight / (height * height);
    let result = '';
    if(bmi <= 18.5) {
        result = 'Underweight';
    } else if(bmi <= 25 && bmi > 18.5) {
        result = 'Normal';
    } else if(bmi <= 30 && bmi > 25) {
        result = "Overweight"
    } else if(bmi > 30) {
        result = "Obese"
    }
    return result
}


console.log(bmi(80, 1.80));