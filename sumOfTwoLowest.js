const sumTwoSmallestNumbers = (numbers) => {
    numbers.sort((a,b) => a - b)
    return numbers[1] + numbers[0]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

