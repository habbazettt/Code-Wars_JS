// var min = function(list){
//     min = list[0];
//     for(var i = 0; i < list.length; i++){
//         if(list[i] < min){
//             min = list[i];
//         }
//     }
//     return min;
// }

// var max = function(list){
//     max = list[0];
//     for(var i = 0; i < list.length; i++){
//         if(list[i] > max){
//             max = list[i];
//         }
//     }
//     return max;
// }
const min = (list) => {
    return Math.min(...list);
}

const max = (list) => {
    list.sort((a,b) => (b-a))
    return list[0]
}


console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));