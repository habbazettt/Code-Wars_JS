function mergeArrays(arr1, arr2) {
    let newArr = arr1.concat(arr2)
    newArr.sort((a, b) => a - b)
    newArr = newArr.filter((item, index) => newArr.indexOf(item) === index)
    return newArr
}