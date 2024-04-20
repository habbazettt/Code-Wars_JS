function isSortedAndHow(arr) {
    let ascending = arr.filter((e, i, a) => e > a[i + 1]).length == 0
    let descending = arr.filter((e, i, a) => e < a[i + 1]).length == 0

    return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
}