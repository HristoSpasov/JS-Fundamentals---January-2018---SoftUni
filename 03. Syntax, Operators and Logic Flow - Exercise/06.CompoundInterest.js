function calculateCompoundInterest(input) {
    let P = input[0];
    let i = input[1] / 100;
    let n = 12 / input[2];
    let t = input[3];

    return (P * Math.pow(1 + i / n, n * t)).toFixed(2);
}

console.log(calculateCompoundInterest([1500, 4.3, 3, 6]));
console.log(calculateCompoundInterest([100000, 5, 12, 25]));