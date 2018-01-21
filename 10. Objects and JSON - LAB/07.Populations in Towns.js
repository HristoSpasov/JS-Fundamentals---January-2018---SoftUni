function populationsInTowns(strArr) {
    let populationCounter = new Map();

    strArr.forEach(e => {
        let tokens = e.split(' <-> ');

        if(!populationCounter.has(tokens[0])){
            populationCounter.set(tokens[0], 0);
        }

        populationCounter.set(tokens[0], populationCounter.get(tokens[0]) + Number(tokens[1]));
    });

    // Print
    [...populationCounter].forEach(([town, population]) => console.log(`${town} : ${population}`));
}

populationsInTowns(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);