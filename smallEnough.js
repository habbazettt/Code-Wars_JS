const smallEnough = (a, limit) => {
    a.sort((a,b) => a-b)
    return a[a.length-1] <= limit ? true : false
}