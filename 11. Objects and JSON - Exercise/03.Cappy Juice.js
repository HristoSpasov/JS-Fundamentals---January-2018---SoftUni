function bottleJuice(arr) {
    // Maps to store data
    let quantity = new Map();
    let bottled = new Map();

    // Loop over all input
    arr.forEach(e => {
       let tokens = e.split(' => ');
       let type = tokens[0];
       let currQuantity = Number(tokens[1]);

       // Check if juice type exist in quantity
        if(!quantity.has(type)){
            quantity.set(type, 0);
        }

        // Add curr quantity
        quantity.set(type, quantity.get(type) + currQuantity);

        // Check if quantity of current type exceeds 1000 and create bottles if necessary
        if(quantity.get(type) >= 1000){
            let bottles = Math.floor(quantity.get(type) / 1000); // Calculate bottles
            quantity.set(type, quantity.get(type) - bottles * 1000); // Reduce stored quantity

            // Check if exist in already bottled juices
            if(!bottled.has(type)){
                bottled.set(type, 0);
            }

            // Add to bottles
            bottled.set(type, bottled.get(type) + bottles);
        }
    });

    // Get result
    [...bottled].forEach(([type, bottles]) => console.log(`${type} => ${bottles}`));
}

bottleJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry =>549',
]);

bottleJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);