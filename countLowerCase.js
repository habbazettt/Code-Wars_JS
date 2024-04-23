function lowercaseCount(str){
    let lowerTotal = 0
    const regex = /[a-z]/g

    for(let i = 0; i < str.length; i++){
        if(str[i].match(regex)){
            lowerTotal++
        }
    }
    return lowerTotal
}