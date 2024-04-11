const nameShuffler = str => {
    let newStr = str.split(' ')
    return newStr.reverse().join(' ')
}

console.log(nameShuffler('John Doe'))

