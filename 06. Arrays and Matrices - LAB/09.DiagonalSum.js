// Return sums of main and secondary diagonal elements
function getDiagonalSums(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if(row == col){
                mainDiagonalSum += matrix[row][col];
            }

            if(col == matrix[row].length - 1 - row){
                secondaryDiagonalSum += matrix[row][col];
            }
        }
    }

    return mainDiagonalSum + ' ' + secondaryDiagonalSum;
}

console.log(getDiagonalSums([[20, 40],
    [10, 60]]
));

console.log(getDiagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
));