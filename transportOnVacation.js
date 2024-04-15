function rentalCarCost(d) {
    let cost = 0
    let firstDayCost = 40
    if(d >= 7) {
        cost += firstDayCost + ((d - 1) * firstDayCost) - 50
    } else if(d <= 7 && d >= 3) {
        cost += firstDayCost + ((d - 1) * firstDayCost) - 20
    } else {
        cost += firstDayCost + ((d - 1) * firstDayCost)
    }
    return cost
}

console.log(rentalCarCost(7));
console.log(rentalCarCost(4));
console.log(rentalCarCost(3));