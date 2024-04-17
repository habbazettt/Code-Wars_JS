function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [age1 * age1, age2 * age2, age3 * age3, age4 * age4, age5 * age5, age6 * age6, age7 * age7, age8 * age8]
    let sum = arr.reduce((acc, curr) => acc + curr, 0)

    return Math.floor(Math.sqrt(sum) / 2)
}