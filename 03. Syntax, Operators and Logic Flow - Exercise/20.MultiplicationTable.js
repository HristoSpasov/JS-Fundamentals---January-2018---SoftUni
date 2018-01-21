function multiplicationTable(n) {
    let result = '<table border="1">\n';

    // Add first line
    result += '  <tr><th>x</th>';
    for (let i = 1; i <= n; i++){
        result += `<th>${i}</th>`;
    }
    result += '</tr>\n'

    // Add rest of the lines
    for (let row = 1; row <= n; row++){
        result += '  <tr>';

        for (let col = 0; col <= n; col++){
            if(col == 0){
                result += `<th>${row}</th>`;
            }else{
                result += `<td>${row * col}</td>`;
            }
        }

        result += '</tr>\n';
    }

    result += '</table>';

    return result;
}

console.log(multiplicationTable(5));