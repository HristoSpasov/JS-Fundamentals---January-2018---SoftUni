function score(json) {
    let parsedJson = JSON.parse(json);

    let html = '<table>\n';
    html += '  <tr><th>name</th><th>score</th></tr>\n';

    parsedJson.forEach(e => {
        html += `  <tr><td>${escape(e['name'])}</td><td>${e['score']}</td></tr>\n`;
    });

    return html + '</table>';

    function escape(str){
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }
}

console.log(score('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'));
console.log(score('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]'));