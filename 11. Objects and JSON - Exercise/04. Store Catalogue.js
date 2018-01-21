function storeProducts(arr) {
    let index = new Map(); // Here will store products by first letter

    arr.forEach(pr => {
        let firstLetter = Array.from(pr)[0];

        // Check if current first letter exists in index
        if (!index.has(firstLetter)) {
            // Create index
            index.set(firstLetter, new Map());
        }

        // Get product tokens
        let tokens = pr.split(' : ');
        let name = tokens[0];
        let price = Number(tokens[1]);

        // According to the task description all products will have unique names => so we will not check for duplicates
        // A.K.A => will replace the price
        index.get(firstLetter).set(name, price);
    });

    // Sort function
    let sortFunc = function orderBy(a, b) {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
    };

    // Sort and print
    [...index].sort(sortFunc)
        .forEach(([index, products]) => {
            console.log(index);
            [...products].sort(sortFunc)
                .forEach(([name, price]) => {
                    console.log(`  ${name}: ${price}`);
                });
        })
}

storeProducts([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
]);

storeProducts([
    'Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);