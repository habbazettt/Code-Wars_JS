function towerBuilder(nFloors) {
    let newArr = []
    for(let i = 0; i < nFloors; i++) {
        newArr.push(' '.repeat(nFloors - i - 1) + '*'.repeat(i + 1) + ' '.repeat(nFloors - i - 1))
    }
    return newArr
}

console.log(towerBuilder(6));


