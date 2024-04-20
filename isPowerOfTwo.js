function isPowerOfTwo(n){
    n = Math.abs(n);
    return n > 0 && (n & (n - 1))
}

console.log(isPowerOfTwo(4));