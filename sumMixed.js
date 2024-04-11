function sumMix(x){
    let newArr = x.map((x) => parseInt(x))
    let total = 0;
    for(let i = 0; i<newArr.length; i++){
        total += newArr[i]
    }
    return total
}

console.log(sumMix([9, 3, '7', '3']));