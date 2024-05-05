function wave(str){
    let arr = []
    for (let i = 0; i < str.length; i++) {
        let letter = str[i]
        if(letter === ' ') continue
        arr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))
    }
    return arr
}

console.log(wave(" gap "));