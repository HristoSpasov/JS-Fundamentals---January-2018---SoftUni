// Find occurrences of word in a text
// Case insensitive
function countOccurrences(text, word) {
    const regex = new RegExp('\\b' + word + '\\b', 'gi');

    let counter = 0;

    let match = [];

    while((match = regex.exec(text)) != null){
        counter++;
    }

    return counter;
}

console.log(countOccurrences('The waterfall was so high, that the child couldn’t see its peak.', 'the'));
console.log(countOccurrences('How do you plan on achieving that? How? How can you even think of that?', 'how'));
console.log(countOccurrences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there'));