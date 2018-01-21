"use strict";

function getWords(input){
    // Functions
    let toUpperCase = a => a.toString().toUpperCase();
    let getWords = a => a.toString().split(/\W+/).filter(w => w != '');
    let concatWords = w => w.join(', ');

    // Execute
    let upperCase = toUpperCase(input);
    let words = getWords(upperCase);
    let result = concatWords(words);

    return result;
}

console.log(getWords('Hi, how are you?'));