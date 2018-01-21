function binaryToDecimal(binary) {
    let result = 0;

    let power = 0;
    for (let i = binary.length - 1; i >= 0; i--){
        result += Number(binary[i]) * Math.pow(2, power++);
    }

    return result;
}

console.log(binaryToDecimal('00001001'));
console.log(binaryToDecimal('11110000'));