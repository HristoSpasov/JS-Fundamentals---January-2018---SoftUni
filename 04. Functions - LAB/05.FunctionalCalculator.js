function simpleCalculator(a, b, operation) {
    // Operation function
    function calculate(a, b, func) {
        return func(a, b);
    }

    // Functions
    let sum =  (a, b) => a + b ;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;

    // Procedure
    let result = '';

    switch (operation){
        case '+': result = calculate(a, b, sum); break;
        case '-': result = calculate(a, b, subtract); break;
        case '*': result = calculate(a, b, multiply); break;
        case '/': result = calculate(a, b, divide); break;
    }

    return result;
}

console.log(simpleCalculator(2, 4, '+'));
console.log(simpleCalculator(2, 4, '-'));
console.log(simpleCalculator(2, 4, '*'));
console.log(simpleCalculator(2, 4, '/'));