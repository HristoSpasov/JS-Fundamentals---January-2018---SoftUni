function cityMarket(strArr) {
    let markets = new Map();

    strArr.forEach(e => {
       let tokens = e.split(' -> ');
       let town = tokens[0];
       let product = tokens[1];
       let price = tokens[2].split(' : ').reduce((a,b) => a * b, 1);

       // Check if town exists
        if(!markets.has(town)){
            markets.set(town, new Map());
        }

        // Check if product exists in current town
        if(!markets.get(town).has(product)){
            markets.get(town).set(product, 0);
        }

        markets.get(town).set(product, markets.get(town).get(product) + price);
    });

    // Print
    [...markets].forEach(([town, products]) => {
        console.log(`Town - ${town}`);
        [...products].forEach(([name, price]) => {
           console.log(`$$$${name} : ${price}`)
        });
    });
}

cityMarket(['Sofia -> Laptops HP -> 200 : 2000', 'Sofia -> Raspberry -> 200000 : 1500', 'Sofia -> Audi Q7 -> 200 : 100000', 'Montana -> Portokals -> 200000 : 1', 'Montana -> Qgodas -> 20000 : 0.2', 'Montana -> Chereshas -> 1000 : 0.3']);