function splitExpression(expression) {
    return expression.split(/[\s(),;.]/g).filter(e => e != '').join('\n');
}

//console.log(splitExpression('let sum = 4 * 4,b = "wow";'));
console.log(splitExpression('let sum =    1 + 2;if(sum > 2){\tconsole.log(sum);}'));