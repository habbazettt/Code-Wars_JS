function order(words){
    let arr = words.split(' ')
    let result = []
    
    arr.forEach(word => {
        let x = word.split('')
        let num = x.find(el => parseInt(el))
        result.push([word, parseInt(num)])
    })
    return result.sort((a, b) => a[1] - b[1]).map(el => el[0]).join(' ')
}

console.log(order("is2 Thi1s T4est 3a"));