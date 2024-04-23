function divCon(x){
    let intArr = x.filter(x => typeof x === 'number')
    let strArr = x.filter(x => typeof x !== 'number').map(x => parseInt(x))

    let sumArr = intArr.reduce((acc, curr) => acc + curr, 0)
    let sumStrArrNum = strArr.reduce((acc, curr) => acc + curr, 0)

    return sumArr - sumStrArrNum
}

console.log(divCon([9, 3, '7', '3']));