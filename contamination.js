function contamination(text, char) {
    let newStr = []
    for (let i = 0; i < text.length; i++) {
        newStr.push(char)
    }
    return newStr.join('')
}

function contamination(text, char) {
    return char.repeat(text.length);
}

function contamination(text, char) {
    return text.replace(/./g, char);
}