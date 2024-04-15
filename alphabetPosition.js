function alphabetPosition(text) {
    return text.split('').map(char => char.charCodeAt() - 96).filter(num => num > 0)
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

