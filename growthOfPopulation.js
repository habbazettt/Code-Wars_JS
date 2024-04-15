function nbYear(p0, percent, aug, p) {
    let year = 0
    for(year = 0; p0 < p; year++) {
        p0 = Math.floor(p0 + (p0 * (percent / 100)) + aug)
    }
    return year
}

console.log(nbYear(1500, 5, 100, 5000));


