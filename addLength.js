function addLength(str) {
    let newArr = []
    let arr = str.split(' ')
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + ' ' + arr[i].length)
    }
    return newArr
}
console.log(addLength('apple ban'));