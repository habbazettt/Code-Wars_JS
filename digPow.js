const digPow = (n, p) => {
    let newArr = n.toString().split('')
    let sum = 0
    for(let i = 0; i < newArr.length; i++) {
        sum += Math.pow(newArr[i], p + i)
    }
    return sum % n === 0 ? sum / n : -1
}

console.log(digPow(46288, 3));