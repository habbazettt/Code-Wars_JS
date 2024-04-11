const highAndLow = (numbers) => {
    let newArr = numbers.split(' ').map(Number)
    newArr.sort((a,b) => a-b)
    return `${newArr[newArr.length-1]} ${newArr[0]}`
}

console.log(highAndLow("1 2 3"));