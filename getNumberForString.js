function getNumberFromString(s) {
    const regex = /[\D]/g;
    let result = s.match(regex);
    return Number(result.join(''));
}

console.log(getNumberFromString('123'));