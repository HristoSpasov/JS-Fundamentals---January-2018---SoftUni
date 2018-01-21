function jsonToHtml(input) {
    let products = JSON.parse(input);

    let html = '<table>\n';
    addColumnNamesToHtml();
    addProductsToHtml();

    return html + '</table>\n';

    // Functions
    function addProductsToHtml() {
        products.forEach(t => {
            let clmNames = getColumnNames(t);
            let line =   '  <tr>';
            clmNames.forEach(cn => {
                line += `<td>${escape(t[cn].toString())}</td>`;
            });

            line += `</tr>\n`;

            html += line;
        });


    }

    function escape(str){
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
    }

    function addColumnNamesToHtml(){
        html += '  <tr>';

        getColumnNames(products[0]).forEach(e => {
            html += `<th>${e}</th>`
        });

        html += '</tr>\n';
    }

    function getColumnNames(pr) {
        return Object.keys(pr);
    }
}

console.log(jsonToHtml('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'));
console.log(jsonToHtml('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'));