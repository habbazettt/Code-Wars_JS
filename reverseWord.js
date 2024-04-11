function reverseWords(str) {
    let arr = str.split('').reverse().join('').split(' ').reverse();
    console.log(arr);
    return arr.join(' ');
}

console.log(reverseWords('double  spaced  words'));