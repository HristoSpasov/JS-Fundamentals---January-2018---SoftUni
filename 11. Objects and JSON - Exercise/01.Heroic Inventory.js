function createHeroInventory(arr) {
    let heroes = [];

    arr.forEach(e => {
        let tokens = e.split(/\s*\/\s*/g);
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = [];

        if(tokens.length > 2){
            items = tokens[2].split(', ');
        }

        let heroObj = {
            name: name,
            level: level,
            items: items
        };

        heroes.push(heroObj);
    });

    return JSON.stringify(heroes);
}

console.log(createHeroInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]));