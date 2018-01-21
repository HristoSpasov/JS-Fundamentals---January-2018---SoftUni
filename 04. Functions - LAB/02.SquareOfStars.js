function drawSquare(n) {
    let line = '* '.repeat(n);

    let square = '';

    for (let i = 1; i <= n; i++) {
        square += line + '\n';
    }

    return square;
}

console.log(drawSquare(5));