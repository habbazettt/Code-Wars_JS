function abbrevName(name){
    let arr = name.split(' ')
    console.log(arr);
    return arr[0][0].toUpperCase() + '.' + arr[1][0].toUpperCase()
}

console.log(abbrevName("Sam Harris"));