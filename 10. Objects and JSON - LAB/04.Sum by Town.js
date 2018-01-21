function sumByTowns(arr) {
    let townsPopulation = {};

    // Loop over all over towns
    for (let town = 0; town < arr.length; town+=2) {
        let currTown = arr[town];
        let currPopulation = Number(arr[town + 1]);

        // Check if town already exists
        if(!townsPopulation.hasOwnProperty(currTown)){
            townsPopulation[currTown] = 0;
        }

        townsPopulation[currTown] += currPopulation;
    }

    // Serialize
    return JSON.stringify(townsPopulation);
}

console.log(sumByTowns(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']));