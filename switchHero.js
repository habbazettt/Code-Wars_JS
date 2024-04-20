function switcheroo(x){
    let newArr = []
    for(let i = 0; i < x.length; i++){
        if(x[i] === 'a'){
            newArr.push('b')
        } else if(x[i] === 'b'){
            newArr.push('a')
        } else if(x[i] === 'c'){
            newArr.push('c')
        }
    }
    return newArr.join('')
}
console.log(switcheroo('abc'));