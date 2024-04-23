function uniTotal (string) {
    let total = 0
    let arr = string.split('')
    for(let i = 0; i < arr.length; i++) {
        total += arr[i].charCodeAt()
    }
    return total
}

console.log(uniTotal('aaa'));