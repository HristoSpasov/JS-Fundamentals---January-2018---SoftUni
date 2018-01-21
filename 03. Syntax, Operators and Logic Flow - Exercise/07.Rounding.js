function round(input) {
    let number = input[0];
    let precision  = input[1];

    let decimalPlaces = number.toString().split('.')[1].length;
    precision = Math.min(15, decimalPlaces, precision);

    return Number(number).toFixed(precision);
}

console.log(round([3.1415926535897932384626433832795, 2]));
console.log(round([10.5, 3]));