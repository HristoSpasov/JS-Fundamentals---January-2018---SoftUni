function diagonalAttack(input) {
    // Read input
    let matrix = [];

    parseInput();
    
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    
    calculateDiagonalSums();
    
    if(mainDiagonalSum == secondaryDiagonalSum){
        // Modify each element which is not part of any diagonals
        modifyMatrix();
    }
    
    let result = getResult();

    return result;

    // Functions
    function parseInput() {
        for (let row = 0; row < input.length; row++) {
            matrix[row] = input[row].split(' ').map(Number);
        }
    }
    
    function calculateDiagonalSums() {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row == col){
                    mainDiagonalSum += matrix[row][col];
                }

                if(col == matrix[row].length - 1 - row){
                    secondaryDiagonalSum += matrix[row][col];
                }
            }
        }
    }
    
    function modifyMatrix() {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row !== col && col !== matrix[row].length - 1 - row){
                    matrix[row][col] = mainDiagonalSum;
                }
            }
        }
    }
    
    function getResult() {
        let result = '';

        for (let row of matrix) {
            result += row.join(' ') + '\n';
        }

        return result;
    }
}

console.log(diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
));

console.log(diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
));