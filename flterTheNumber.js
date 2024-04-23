var filterString = function(value) {
    const regex = /\D/g
    return Number(value.replace(regex, ''))
}

console.log(filterString("a1b2c3"));