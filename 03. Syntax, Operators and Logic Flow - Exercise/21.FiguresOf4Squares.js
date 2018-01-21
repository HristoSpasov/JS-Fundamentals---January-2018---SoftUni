function drawFigure(n){
    let row = n;
    let col = 2 * n - 1;

    // Check of  n is even or odd
    if(row % 2 == 0){
        row--;
    }

    let figure = '';

    // Loop over all lines
    for (let j = 0; j < row; j++){

        let currLine = '';

        if (j == 0 || j == row - 1 || j == Math.floor(row / 2)){
            // Draw first/middle/last line
            for (let i = 0; i < col; i++){
                if (i == 0 || i == col - 1 || i == Math.floor(col / 2)){
                    currLine += '+';
                } else {
                    currLine += '-';
                }
            }
        } else {
            // Draw lines between
            for (let i = 0; i < col; i++){
                if (i == 0 || i == col - 1 || i == Math.floor(col / 2)){
                    currLine += '|';
                } else {
                    currLine += ' ';
                }
            }
        }


        figure += currLine + '\n';
    }

    return figure;
}

console.log(drawFigure(7));