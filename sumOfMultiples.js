function sumMul(n,m){
    if(m < n || n <= 0 || m <= 0) {
        return 'INVALID'
    } else {
        let total = 0
        for(let i = n; i < m; i++) {
            if(i % n === 0) {
                total += i
            }
        }
        return total
    }
}

console.log(sumMul(2,9));


