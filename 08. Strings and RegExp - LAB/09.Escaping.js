function htmlEscape(input) {
    let result = '<ul>\n';

    // Loop over all input tokens
    for (let s of input) {
        let currLine = `  <li>`;
        s = s.replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;')
             .replace(/"/g, '&quot;');

        currLine += s + '</li>\n';

        result += currLine;
    }

    result += '</ul>\n';

    return result;
}

console.log(htmlEscape(['<b>unescaped text</b>', 'normal text']));
console.log(htmlEscape(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']));