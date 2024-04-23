function capitalize(s){
    let oddCap = s.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')
    let evenCap = s.split('').map((char, index) => index % 2 === 1 ? char.toUpperCase() : char.toLowerCase()).join('')

    return [oddCap, evenCap]
};