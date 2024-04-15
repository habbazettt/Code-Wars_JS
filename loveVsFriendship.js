function wordsToMarks(string){
    let total = 0
    let newStr = string.split('')
    for(let i = 0; i < newStr.length; i++) {
        total += newStr[i].charCodeAt(0) - 96
    }
    return total
}

console.log(wordsToMarks('attitude'));


