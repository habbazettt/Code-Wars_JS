const isPalindrome = x => {
    return x.toLowerCase().split('').reverse().join('') === x.toLowerCase()
}

console.log(isPalindrome('aba'));


