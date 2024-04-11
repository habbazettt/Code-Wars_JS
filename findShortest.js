const findShort = s => {
    let arr = s.split(' ')
    let min = Math.min(...arr.map(el => el.length))
    return min
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));