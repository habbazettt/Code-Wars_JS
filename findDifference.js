const findDifference = (a,b) => {
    let vol1 = a.reduce((acc, curr) => acc * curr)
    let vol2 = b.reduce((acc, curr) => acc * curr)
    return Math.abs(vol1 - vol2)
}

console.log(findDifference([2,2,2],[2,1,2]));


