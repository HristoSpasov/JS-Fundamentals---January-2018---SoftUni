function drawTriangle(n) {
    function stringGenerator(count) {
       return '*'.repeat(count);
    }

    let triangle = '';

    // Draw triangle top
    for (let i = 1; i <= n; i++) {
        triangle += stringGenerator(i) + '\n';
    }

    // Draw triangle bottom
    for (let i = n - 1; i >= 1; i--) {
        triangle += stringGenerator(i) + '\n';
    }

    return triangle;
}

console.log(drawTriangle(5));