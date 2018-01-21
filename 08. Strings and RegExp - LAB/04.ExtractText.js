// Extract all substrings surrounded by parentheses '(' ')'
function extractStrings(text) {
    const open = '(';
    const close = ')';

    let extractedSubStrings = [];

    let currOpenIndex = text.indexOf(open);

    while (currOpenIndex !== -1){
        let currCloseIndex = text.indexOf(close, currOpenIndex + 1);
        if(currCloseIndex === -1){
            break;
        }

        extractedSubStrings.push(text.substring(currOpenIndex + 1, currCloseIndex));

        currOpenIndex = text.indexOf(open, currCloseIndex + 1);
    }

    return extractedSubStrings.join(', ');
}

console.log(extractStrings('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)'));