function distance(input) {
    return Math.sqrt(Math.pow(input[0] - input[3], 2) + Math.pow(input[1] - input[4], 2)+ Math.pow(input[2] - input[5], 2))
}

console.log(distance([1, 1, 0, 5, 4, 0]));
console.log(distance([3.5, 0, 1, 0, 2, -1]));