const removeChar = (str) => {
    newStr = str.split('')
    newStr.shift()
    newStr.pop()
    return newStr.join('')   
}

console.log(removeChar('hello'));