function calculateDistanceOverTime(input) {
    return Math.abs(input[0] / 3.6 * input[2] - input[1] / 3.6 * input[2]);
}

console.log(calculateDistanceOverTime([0, 60, 3600]));
console.log(calculateDistanceOverTime([11, 10, 120]));
console.log(calculateDistanceOverTime([5, -5, 40]));