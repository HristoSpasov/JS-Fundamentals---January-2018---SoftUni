// Sum of all rows and columns should be equal
function isMatrixMagic(matrix) {
    // Calculate the sum of first row for target sum
    let targetSum = matrix[0].reduce((n1, n2) => n1 + n2);

    // Control
    let rowSumsAreEqual = true;
    let colSumsAreEqual = true;

    // Sum all rows
    matrix.forEach(arr => {
        if(arr.reduce((n1, n2) => n1 + n2) !== targetSum){
            rowSumsAreEqual = false;
        }
    });

    // Sum all columns
    for (let col = 0; col < matrix.length; col++) {

        let currColumnSum = 0;

        for (let row = 0; row < matrix.length; row++) {
            currColumnSum += matrix[col][row];
        }

        if(currColumnSum !== targetSum){
            colSumsAreEqual = false;
        }
    }

    return rowSumsAreEqual && colSumsAreEqual === true;
}

console.log(isMatrixMagic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));

console.log(isMatrixMagic([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));

console.log(isMatrixMagic([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));