function largestPairSum (numbers) {
    let newArr = numbers.sort((a,b) => b - a)
    return newArr[0] + newArr[1]
}

console.log(largestPairSum([10,14,2,23,19]));


