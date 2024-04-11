function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((acc, curr) => acc + curr) / classPoints.length
}