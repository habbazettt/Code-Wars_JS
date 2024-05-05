function solve(s){
    let upperCase = s.split('').filter(char => char === char.toUpperCase()).length
    let lowerCase = s.split('').filter(char => char === char.toLowerCase()).length
    return (upperCase > lowerCase) ? s.toUpperCase() : s.toLowerCase()
}

console.log(solve("CODe"));

