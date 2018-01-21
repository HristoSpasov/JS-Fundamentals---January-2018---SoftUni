function split(text, delimiter) {
    return text.split(delimiter).join('\n');
}

console.log(split('One-Two-Three-Four-Five', '-'));
console.log(split('http://platform.softuni.bg', '.'));