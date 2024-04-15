const high = x => {
    let newArr = []
    x.split(' ').forEach(el => {
        newArr.push(el.split('').reduce((acc, cur) => acc + cur.charCodeAt(0) - 96, 0))
    })
    return x.split(' ')[newArr.indexOf(Math.max(...newArr))]
}

console.log(high('man i need a taxi up to ubud'));


