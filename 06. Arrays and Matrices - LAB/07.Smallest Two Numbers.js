// Extract smallest 2 numbers
function getSmallestTwoNumbers(arr) {
    return arr.sort((a, b) => a - b).slice(0, 2).join(' ');
}

console.log(getSmallestTwoNumbers([30, 15, 50, 5]));
console.log(getSmallestTwoNumbers([3, 0, 10, 4, 7, 3]));