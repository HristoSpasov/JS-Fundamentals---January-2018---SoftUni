function matchDates(input) {
    const pattern = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/gm;
    let result = '';

    input.forEach(e => {
        if(e.match(pattern)){
            let matchArray = [];

            while((matchArray = pattern.exec(e)) != null){
                result += `${matchArray[0]} (Day: ${matchArray[1]}, Month: ${matchArray[2]}, Year: ${matchArray[3]})\n`;
            }
        }
    });

    return result;
}

console.log(matchDates(['I am born on 30-Dec-1994.', 'This is not date: 512-Jan-1996.', 'My father is born on the 29-Jul-1955.']));
console.log(matchDates(['1-Jan-1999 is a valid date.', 'So is 01-July-2000.', 'I am an awful liar, by the way – Ivo, 28-Sep-2016.']));