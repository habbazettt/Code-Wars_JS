var isSquare = function(n){
    if(n < 0) return false
    let result = Math.sqrt(n) % 1 === 0
    console.log(result);
    return result
}

console.log(isSquare(25));