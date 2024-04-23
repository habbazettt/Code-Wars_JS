function encode(string) {
    let result = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'a') {
            result.push(1)
        } else if (string[i] === 'e') {
            result.push(2)
        } else if (string[i] === 'i') {
            result.push(3)
        } else if (string[i] === 'o') {
            result.push(4)
        } else if (string[i] === 'u') {
            result.push(5)
        } else {
            result.push(string[i])
        }
    }
    return result.join('')
}

function decode(string) {
    let result = []
    for(let i = 0; i < string.length; i++) {
        if(string[i] === '1') {
            result.push('a')
        } else if(string[i] === '2') {
            result.push('e')
        } else if(string[i] === '3') {
            result.push('i')
        } else if(string[i] === '4') {
            result.push('o')
        } else if(string[i] === '5') {
            result.push('u')
        } else {
            result.push(string[i])
        }
    }
    return result.join('')
}

