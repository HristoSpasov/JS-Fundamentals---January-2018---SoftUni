function negativePositiveNumbers(arr) {
    let resultArr = [];

    arr.forEach(e => e < 0 ? resultArr.unshift(e) : resultArr.push(e));

    return resultArr.join('\n');
}

console.log(negativePositiveNumbers([7, -2, 8, 9]));
console.log(negativePositiveNumbers([3, -2, 0, -1]));
