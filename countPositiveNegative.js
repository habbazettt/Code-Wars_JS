function countPositivesSumNegatives(input) {
    let positiveArr = input.filter(x => x > 0)
    let negativeArr = input.filter(x => x < 0)

    let sumNegative = negativeArr.reduce((acc, curr) => acc + curr, 0)
    if(input === null || input.length === 0) return []
    return [positiveArr.length, sumNegative]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));