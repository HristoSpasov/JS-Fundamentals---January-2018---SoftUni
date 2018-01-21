function townsToJson(towns) {
    let columnNames = getColumnNames();

    let allTowns = getAllTowns();

    return JSON.stringify(allTowns);

    function getColumnNames() {
        return towns.shift().split(/\s*\|\s*/).filter(e => e !== '');
    }

    function getAllTowns() {
        let allTowns = [];

        towns.forEach(t => {
            let currTownTokens  =  t.split(/\s*\|\s*/).filter(e => e !== '');
            let currTownObj = {};
            currTownObj[columnNames[0]] = currTownTokens[0];
            currTownObj[columnNames[1]] = Number(currTownTokens[1]);
            currTownObj[columnNames[2]] = Number(currTownTokens[2]);

            allTowns.push(currTownObj);
        });

        return allTowns;
    }
}

console.log(townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));