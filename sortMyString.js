function sortMyString(S) {
    let oddStr = S.split('').filter((char, index) => index % 2 === 0).join('')
    let evenStr = S.split('').filter((char, index) => index % 2 === 1).join('')
    return `${oddStr} ${evenStr}`
}
console.log(sortMyString("CodeWars"));