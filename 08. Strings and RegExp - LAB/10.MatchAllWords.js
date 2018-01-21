function matchAllWords(text) {
    return text.split(/\W/g).filter(e => e != '').join('|');
}

console.log(matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text'));
console.log(matchAllWords('_(Underscores) are also word characters'));