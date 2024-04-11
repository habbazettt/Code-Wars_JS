const getAverage = (marks) => {
    let total = 0
    marks.map(m => total += m)
    return Math.floor(total / marks.length)
}

console.log(getAverage([2,2,2,2]));