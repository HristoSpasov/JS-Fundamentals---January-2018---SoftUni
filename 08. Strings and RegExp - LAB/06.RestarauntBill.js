// We have an array of products
// On even indices we have the product name
// On odd is the corresponding product price
function calculateBull(orders) {
    let products = orders.filter((pr, i) => i % 2 === 0);
    let prices = orders.filter((pr, i) => i % 2 !== 0).map(Number);

    return `You purchased ${products.join(', ')} for a total sum of ${prices.reduce((a, b) => a + b)}`;
}

console.log(calculateBull(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']));
console.log(calculateBull(['Cola', '1.35', 'Pancakes', '2.88']));