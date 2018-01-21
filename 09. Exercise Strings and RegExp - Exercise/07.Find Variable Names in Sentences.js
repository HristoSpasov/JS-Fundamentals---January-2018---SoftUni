function findVariables(str) {
    const pattern = /\b_{1}([A-Za-z0-9]+)\b/g;

    let result = [];

    let match = [];

    while((match = pattern.exec(str)) != null){
        // The first group in every match is the variable
        result.push(match[1]);
    }

    return result.join(',');
}

console.log(findVariables('The _id and _age variables are both integers.'));
console.log(findVariables('Calculate the _area of the _perfectRectangle object.'));
console.log(findVariables('__invalidVariable _evenMoreInvalidVariable_ _validVariable'));