// Print numbers in range [1, n]
// Even rows are green and odd are blue
function colorfulNumbers(n) {
    let result = '<ul>\n';

    for (let i = 1; i <= n; i++){
        let color = i % 2 == 0 ? 'blue' : 'green';

        result += `  <li><span style='color:${color}'>${i}</span></li>\n`;
    }

    result += '</ul>';

    return result;
}

console.log(colorfulNumbers(10));