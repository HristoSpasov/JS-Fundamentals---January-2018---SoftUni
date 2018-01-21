// Draw chess board
function drawChessBoard(n) {
    let result = '<div class="chessboard">\n';

    for (let r = 0; r < n; r++){
        result += '  <div>\n';

        for (let c = 0; c < n; c++){
            let color = (r + c) % 2 == 0 ? 'black' : 'white';

            result += `    <span class="${color}"></span>\n`;
        }

        result += '  </div>\n';
    }

    result += '</div>';

    return result;
}

console.log(drawChessBoard(3));