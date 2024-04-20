function openOrSenior(data){
    let arrResult = []
    data.forEach(e => {
        if(e[0] >= 55 && e[1] > 7){
            arrResult.push('Senior')
        } else {
            arrResult.push('Open')
        }
    })
    return arrResult
}