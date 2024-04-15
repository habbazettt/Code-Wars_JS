const descendingOrder = (n) => parseInt(n.toString().split('').sort((a, b) => b - a).join(''))
console.log(descendingOrder(15));