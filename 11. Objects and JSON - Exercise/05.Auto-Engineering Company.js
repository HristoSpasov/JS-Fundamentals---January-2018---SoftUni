function calcProducedCars(strArr) {
    let cars = new Map();

    strArr.forEach(c => {
        let currCarTokens = c.split(' | ');
        let make = currCarTokens[0];
        let model = currCarTokens[1];
        let producedCars = Number(currCarTokens[2]);

        // Check if make exists
        if(!cars.has(make)){
            cars.set(make, new Map());
        }

        // Check if model exists
        if(!cars.get(make).has(model)){
            cars.get(make).set(model, 0);
        }

        // Add current quantity to existing quantity
        cars.get(make).set(model, cars.get(make).get(model) + producedCars);
    });

    // Print result
    [...cars].forEach(([make, models]) => {
        console.log(make);
        [...models].forEach(([model, quantity]) => {
            console.log(`###${model} -> ${quantity}`);
        })
    })
}

calcProducedCars([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);