function stringStartsWith(text, substring) {
    return text.startsWith(substring);
}

console.log(stringStartsWith('How have you been?', 'how'));
console.log(stringStartsWith('The quick brown fox…', 'The quick brown fox…'));
console.log(stringStartsWith('Marketing Fundamentals, starting 19/10/2016', 'Marketing Fundamentals, sta'));