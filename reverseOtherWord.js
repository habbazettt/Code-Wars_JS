function reverse(str){

    let wordCount = str.split(' ')
    
    let challenge =  wordCount.map((a, i) => (i%2 == 0)? a : a.split('').reverse().join('')).join(' ')
    
    return (str == false) ? '' : challenge
    
}

console.log(reverse("Reverse this string, please!"));