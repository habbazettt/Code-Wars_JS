function getCount(str) {
    let count = 0
    let vowel = ['a', 'e', 'i', 'o', 'u']
    let newStr = str.split('')
    for(let i = 0; i < newStr.length; i++) {
        if(vowel.includes(newStr[i])) {
            count++
        }
    }
    return count
}

console.log(getCount('abracadabra'));


