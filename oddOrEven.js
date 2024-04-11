const oddOrEven = (arr) => {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }

    return result % 2 == 0 ? 'even' : 'odd'
}

console.log(oddOrEven([0,1,2]));