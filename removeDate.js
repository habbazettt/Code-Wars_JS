function shortenToDate(longDate) {
    let dateArr = longDate.split(',')
    return dateArr[0]
}
console.log(shortenToDate("Friday May 2, 9am"));