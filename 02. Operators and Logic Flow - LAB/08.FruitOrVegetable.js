function isFruitOrVegetable(input) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

    if (fruits.includes(input)){
        return 'fruit';
    } else if(vegetables.includes(input)){
        return 'vegetable';
    }else {
        return 'unknown';
    }
}

console.log(isFruitOrVegetable('banana'));
console.log(isFruitOrVegetable('cucumber'));
console.log(isFruitOrVegetable('pizza'));