function removeSmallest(numbers) {
    let smallest = Math.min(...numbers)
    let index = numbers.indexOf(smallest)
    return numbers.filter((num, i) => i !== index)
}