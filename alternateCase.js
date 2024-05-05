function alternateCase(s) {
    let newStr = []
    s.split('').map((char) => {
        if(char === char.toUpperCase()) {
            newStr.push(char.toLowerCase())
        } else {
            newStr.push(char.toUpperCase())
        }
    })
    return newStr.join('')
}

console.log(alternateCase('Hello World'));
