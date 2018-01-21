function sumBirstAndLast(arr) {
    return Number(arr.slice(0, 1)) + Number(arr.reverse().slice(0, 1));
}

console.log(sumBirstAndLast(['20', '30', '40']));