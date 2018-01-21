function jsonToHtml(jsonArr){
    let html = '<table>\n';

    jsonArr.forEach(e => {
        e = JSON.parse(e);
        let columnNames = getColumnNames(e);

       html += `    <tr>\n`;

       columnNames.forEach(c => {
           html += `        <td>${escape(e[c].toString())}</td>\n`;
       });

       html += '    <tr>\n';

    });

    return html += '</table>';

    function getColumnNames(obj) {
        return Object.keys(obj);
    }

    function escape(str){
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}

console.log(jsonToHtml([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]));