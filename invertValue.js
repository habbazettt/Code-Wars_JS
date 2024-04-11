const invert = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= -1
        newArr.push(arr[i])
    }
    return newArr
}

console.log(invert([1, 2, 3, 4, 5]));