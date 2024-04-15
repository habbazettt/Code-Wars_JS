function remove (string) {
    let newStr = string.split('')
    if(newStr[newStr.length - 1] === '!') {
        newStr.pop()
    }
    return newStr.join('')
}

console.log(remove('hello!!'));