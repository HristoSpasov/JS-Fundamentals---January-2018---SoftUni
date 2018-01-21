function printStringLettersWithIndices(str) {
    let result = '';

    for (let s in str) {
        result += `str[${s}] -> ${str[s]}\n`;
    }

    return result.trim();
}

console.log(printStringLettersWithIndices('Hello, World!'));