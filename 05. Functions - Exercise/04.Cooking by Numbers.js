function cookThemAll(input) {
    let number = Number(input[0]); // This is the number to cook

    // Functions
    let chop = a => a / 2;
    let dice = a => Math.sqrt(a);
    let spice = a => ++a;
    let bake = a => a *= 3;
    let fillet = a => 0.8 * a;

    // Loop over the commands
    for (let i = 1; i < input.length; i++) {
        let operation = input[i];

        switch (operation.toString().toLowerCase()){
            case 'chop': number = chop(number); break;
            case 'dice': number = dice(number); break;
            case 'spice': number = spice(number); break;
            case 'bake': number = bake(number); break;
            case 'fillet': number = fillet(number); break;
        }

        // Log current number value
        console.log(number);
    }
}

cookThemAll([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
cookThemAll([9, 'dice', 'spice', 'chop', 'bake', 'fillet'])
