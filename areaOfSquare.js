function squareArea(A){
  let circum = A * 4
  let radius = circum / (2 * Math.PI)
  let area = radius * radius
  return Math.round(area * 100) / 100
}

console.log(squareArea(14.05))