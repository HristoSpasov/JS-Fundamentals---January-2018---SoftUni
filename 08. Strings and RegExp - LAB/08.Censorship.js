// Censor text
// Second input param is array of words to be censored
function censor(text, words) {
    for (let word of words) {
        let current = text.indexOf(word);
        while(current != -1){
            text = text.replace(word, '*'.repeat(word.length));
            current = text.indexOf(word, current);
        }
    }

    return text;
}

console.log(censor('roses are red, violets are blue red', [', violets are', 'red']));
console.log(censor('David Ruben Piqtoukun (born 1950) is an Inuit artist from Paulatuk, Northwest Territories. His output includes sculpture and prints; the sculptural work is innovative in its use of mixed media. His materials and imagery bring together modern and traditional Inuit stylistic elements in a personal vision. An example of this is his work "The Passage of Time" (1999), which portrays a shaman in the form of a salmon moving through a hole in a hand. While shamanic imagery is common in much of Inuit art, the hand in this work is sheet metal, not a traditional material such as walrus ivory, caribou antler or soapstone. Ruben\'s brother, Abraham Apakark Anghik Ruben, is also a sculptor. Fellow Inuit artist Floyd Kuptana learned sculpting techniques as an apprentice to David Ruben.', ['Inuit']));