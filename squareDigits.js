function squareDigits(num){
    let arr = num.toString().split('')
    let newArr = []
    arr.map((v) => newArr.push(v * v))
    return parseInt(newArr.join(''))
}
console.log(typeof squareDigits(3212));