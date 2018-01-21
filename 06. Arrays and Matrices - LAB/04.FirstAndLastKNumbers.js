// K is the first element in the array
function getFirstKNumbers(arr) {
    return arr.slice(1, 1 + arr[0]).join(' ') + '\n' + arr.slice(arr.length - 1 - arr[0] + 1, arr.length - 1 - arr[0] + 1 + arr[0]).join(' ');
}

console.log(getFirstKNumbers([2, 7, 8, 9]));
console.log(getFirstKNumbers([3, 6, 7, 8, 9]));