function sumArray(array) {
    if(array == null) {
        return 0
    } else if(array.length < 2) {
        return 0
    } else {
        array = array.sort((a, b) => a - b)
        let total = 0
        for(let i = 1; i < array.length - 1; i++) {
            total += array[i]
        }
        return total
    }
}
console.log(sumArray([6, 2, 1, 8, 10]));