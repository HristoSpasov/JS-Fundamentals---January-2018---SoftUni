// Count occurrences of string in a text
function countOccurrences(targetStr, text) {
    let count = 0;

    let currOccurrenceStartIndex = text.indexOf(targetStr);

    while(currOccurrenceStartIndex != -1){
        count++;
        currOccurrenceStartIndex = text.indexOf(targetStr, ++currOccurrenceStartIndex);
    }

    return count;
}

console.log(countOccurrences('the', 'The quick brown fox jumps over the lay dog.'));
console.log(countOccurrences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.'));