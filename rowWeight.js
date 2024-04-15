function rowWeights(array) {
    let firstRow = []
    let secondRow = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            firstRow.push(array[i])
        } else {
            secondRow.push(array[i])
        }
    }
    let firstSum = firstRow.reduce((acc, curr) => acc + curr)
    let secondSum = secondRow.reduce((acc, curr) => acc + curr, 0)
    return [firstSum, secondSum]
}

console.log(rowWeights([13, 27, 49]));