function lowestPricesOfProduct(strArr) {
    let products = new Map();

    strArr.forEach(pr => {
       let tokens = pr.split(' | ');
       let name = tokens[1];
       let town = tokens[0];
       let price = Number(tokens[2]);

       // Check if product exists
        if(!products.has(name)){
            products.set(name, new Map());
        }

        // Check if town exists
        if(!products.get(name).has(town)){
            products.get(name).set(town, 0);
        }

        // Add if not present or update existing price
        products.get(name).set(town, price);
    });

    // Print
    [...products].forEach(([product, towns]) => {
       let cheapest = [...towns].sort((a, b) => {
           if(a[1] < b[1]) return -1;
           if(a[1] > b[1]) return 1;
           return 0
       })[0];

        console.log(`${product} -> ${cheapest[1]} (${cheapest[0]})`);
    });
}

lowestPricesOfProduct([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10',
]);