const sumPositive = (arr) => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i]
        }
    }
    return total
}

console.log(sumPositive([1,-2,3,4,5]));