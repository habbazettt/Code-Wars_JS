function sumDigits(number) {
    let sum = 0
    let digits = Math.abs(number).toString().split('')
    for(let i = 0; i < digits.length; i++){
        sum += Number(digits[i])
    }
    return sum
}
