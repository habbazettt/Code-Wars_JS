function alphabetWar(fight){
    let left = 0
    let right = 0
    let newArr = fight.split('')
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] === 'w') {
            left += 4
        } else if(newArr[i] === 'p') {
            left += 3
        } else if(newArr[i] === 'b') {
            left += 2
        } else if(newArr[i] === 's') {
            left += 1
        } else if(newArr[i] === 'm') {
            right += 4
        } else if(newArr[i] === 'q') {
            right += 3
        } else if(newArr[i] === 'd') {
            right += 2
        } else if(newArr[i] === 'z') {
            right += 1
        }
    }
    return left > right ? 'Left side wins!' : right > left ? 'Right side wins!' : 'Let\'s fight again!'
}