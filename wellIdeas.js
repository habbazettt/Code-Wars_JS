function well(idea){
    let bad = 0
    let good = 0
    for(let i = 0; i <= idea.length; i++) {
        if(idea[i] === 'bad') {
            bad++
        } else if(idea[i] === 'good') {
            good++
        }
    }

    if(good >= 1 && good <= 2) {
        return 'Publish!'
    } else if(good > 2) {
        return 'I smell a series!'
    } else {
        return 'Fail!'
    }
}

console.log(well(['bad', 'bad', 'bad']));