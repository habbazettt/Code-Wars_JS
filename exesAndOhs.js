function XO(str) {
    let newArr = str.toLowerCase().split('')
    let x = 0, o = 0
    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i] === 'x') {
            x++
        } else if(newArr[i] === 'o') {
            o++
        }
    }

    return x === o
}