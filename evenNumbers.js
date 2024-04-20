// function evenNumbers(array, number) {
//     let newArr = []
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] % 2 === 0) {
//             newArr.push(array[i])
//         }
//     }
//     console.log(newArr);
//     return newArr.slice(-number)
// }

const evenNumbers = (array, number) => array.filter(x => x % 2 === 0).slice(-number)

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));