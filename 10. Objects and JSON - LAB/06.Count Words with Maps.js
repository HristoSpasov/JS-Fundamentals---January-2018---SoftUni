function countWordsUsingMap(strArr) {
    let wordCounter = new Map();

    strArr.join(' ')
        .split(/\W+/g)
        .filter(w => w !== '')
        .map(w => w.toLowerCase())
        .forEach(w => {
            // Check if word already is in map
            if(!wordCounter.has(w)){
                wordCounter.set(w, 0);
            }

            // Increase counter
            wordCounter.set(w, wordCounter.get(w) + 1);
        });

    // Print
    [...wordCounter]
        .sort()
        .forEach(([k, v]) => {
        console.log(`'${k}' -> ${v} times`);
    })
}

countWordsUsingMap(['Far too slow, you\'re far too slow.']);