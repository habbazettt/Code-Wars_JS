const countSheep = (sheep) => {
    let total = 0
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) {
            total++
        }
    }
    return total
}
console.log(countSheep([undefined,null,false,true]));