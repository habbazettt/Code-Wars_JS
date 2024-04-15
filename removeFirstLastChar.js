function array(string) {
    if(string.split(',').length <= 2) {
        return null
    } else {
        return string.split(',').slice(1, -1).join(' ')
    }
}

console.log(array('A1,B2,C3,D4'));


