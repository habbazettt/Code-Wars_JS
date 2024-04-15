function reverseLetter(str) {
    const regex = /[a-zA-Z]/g;
    return str.match(regex);
}

console.log(reverseLetter('abcde'));

