function countWords(str) {
    let wordsCounter = {};

    str.join(' ')
        .split(/\W+/g)
        .filter(w => w !== '')
        .forEach(w =>{
           // Check if word exists
           if(!wordsCounter.hasOwnProperty(w)){
               wordsCounter[w] = 0;
           }

           wordsCounter[w]++;
        });

    return JSON.stringify(wordsCounter);
}

console.log(countWords(['Far too slow, you\'re far too slow.']));
console.log(countWords(['JS devs use Node.js for server-side JS.-- JS for devs']));