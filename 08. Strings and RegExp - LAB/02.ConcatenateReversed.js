// Read array of strings
// Output concatenated strings reversed
function concat(strArr) {
    return Array.from(strArr.join('')).reverse().join('');
}

console.log(concat(['I', 'am', 'student']));
console.log(concat(['race', 'car']));