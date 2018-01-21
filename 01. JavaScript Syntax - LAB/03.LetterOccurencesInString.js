function countLetter(word, letterToCount) {
    let counter = 0;

    for(let ch of word){
        if(ch == letterToCount){
            counter++;
        }
    }

    console.log(counter);
}

countLetter('hello', 'l');
countLetter('panther', 'n');