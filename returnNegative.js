function makeNegative(num) {
    if (num == 0) {
        return 0
    } else if (num < 0) {
        return num
    } else {
        return num * -1
    }
}

console.log(makeNegative(42));