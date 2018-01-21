// Double each numbers at odd position and reverse them
function processNumbersAtOddPositions(arr){
    return arr.filter((a, i) => i % 2 != 0)
        .reverse()
        .map(n => n *= 2)
        .join(' ');
}

console.log(processNumbersAtOddPositions([10, 15, 20, 25]));
console.log(processNumbersAtOddPositions([3, 0, 10, 4, 7, 3]));