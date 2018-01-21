function isYearLeap(year) {
    let isLeap = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

    return isLeap ? 'yes' : 'no';
}

console.log(isYearLeap(1999));
console.log(isYearLeap(2000));
console.log(isYearLeap(1900));