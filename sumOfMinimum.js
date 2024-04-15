function sumOfMinimums(arr) {
    let result = 0
    let mins = []
    let temp = 0
    for (let i = 0; i < arr.length; i++) {
        temp = Math.min(...arr[i])
        mins.push(temp)
    }
    result = mins.reduce((acc, curr) => acc + curr, 0)
    return result
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));

