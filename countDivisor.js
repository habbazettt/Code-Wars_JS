function getDivisorsCnt(n) {
    let divisor = 0
    if (n == 1) return 1
    if (n % Math.sqrt(n) === 0) {
        divisor++
    }
    for (let i = 1; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            divisor += 2
        }
    }
    return divisor
}

console.log(getDivisorsCnt(66049));