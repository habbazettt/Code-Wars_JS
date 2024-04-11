// const reverseSeq = (n) => {
//     let arr = []
//     for (let i = n; i >= 1; i--) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(reverseSeq(5));

const reverseSeq = (n) => Array(n).fill().map((el, i) => n - i);

console.log(reverseSeq(5));