const findAverage = (nums) => {
    let avg = nums.reduce((acc, curr) => acc + curr, 0) / nums.length
    return avg
}

console.log(findAverage([1,2,3,4,5,6,7,8,9,10]));

