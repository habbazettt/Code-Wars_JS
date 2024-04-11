// function grow(hasil) {
//     let hasil = x[0]

//     for (let i = 1; i < x.length; i++) {
//         hasil *= x[i]
//     }

//     return hasil
// }

// function grow(x) {
//     const hasil = x.reduce((acc, curr) => acc * curr, 1)

//     return hasil
// }

const grow = (x) => x.reduce((acc, curr) => acc * curr)

console.log(grow([1, 2, 3, 4]));