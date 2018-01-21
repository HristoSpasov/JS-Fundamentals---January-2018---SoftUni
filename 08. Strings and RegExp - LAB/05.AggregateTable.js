// Aggregate table
// Print all towns separated by ', '
// Sum all incomes
function aggregateTable(tableArr) {
    let towns = [];
    let totalIncome = 0;

    tableArr.forEach(line => {
        let lineTokens = line.split('|').filter(e => e != '').map(e => e.trim());

        towns.push(lineTokens[0]);
        totalIncome += Number(lineTokens[1]);
    });

    return towns.join(', ') + '\n' + totalIncome;
}

console.log(aggregateTable(['| Sofia           | 300', '| Veliko Tarnovo  | 500', '| Yambol          | 275']));