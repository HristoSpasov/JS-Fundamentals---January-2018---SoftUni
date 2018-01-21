function stringEndsWith(text, substring) {
    return text.endsWith(substring);
}

console.log(stringEndsWith('This sentence ends with fun?', 'fun?'));
console.log(stringEndsWith('This is Houston, we have…', 'We have…'));
console.log(stringEndsWith('The new iPhone has no headphones jack.', 'o headphones jack.'));