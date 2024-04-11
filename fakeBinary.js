function fakeBin(x){
    let arr = x.split('')
    
    return arr.map((x) => x < 5 ? x = 0 : x = 1).join('')
}

console.log(fakeBin('45385593107843568'));