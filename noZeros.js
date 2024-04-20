function noBoringZeros(n) {
    if(n == 0) {
      return 0
    } else {
      return n % 10 == 0 ? noBoringZeros(n / 10) : n
    }
}