function biggestNumber([a, b, c]) {
    return Math.max(a, Math.max(b, c));
}

console.log(biggestNumber([5, -2, 7]));
console.log(biggestNumber([-10, -20, -30]));