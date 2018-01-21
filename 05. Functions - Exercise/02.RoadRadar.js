function roadRadar(input) {
    // Constants
    const motorwayMaxSpeed = 130;
    const interstateMaxSpeed = 90;
    const cityMaxSpeed = 50;
    const residentialMaxSpeed = 20;

    const upTo20kmph = 'speeding';
    const upTo40kmph = 'excessive speeding';
    const over40kmph = 'reckless driving';

    // Input
    let speed = Number(input[0]);
    let location = input[1];

    // Proceed
    switch (location.toString().toLowerCase()){
        case 'city': checkForSpeeding(speed, cityMaxSpeed); break;
        case 'residential': checkForSpeeding(speed, residentialMaxSpeed); break;
        case 'interstate': checkForSpeeding(speed, interstateMaxSpeed); break;
        case 'motorway': checkForSpeeding(speed, motorwayMaxSpeed); break;
    }

    function checkForSpeeding(speed, maxSpeed) {
        if(speed > maxSpeed){
            if(speed <= maxSpeed + 20){
                console.log(upTo20kmph);
            } else if(speed <= maxSpeed + 40){
                console.log(upTo40kmph);
            }else {
                console.log(over40kmph);
            }
        }
    }
}

console.log(roadRadar([40, 'city']));
console.log(roadRadar([21, 'residential']));
console.log(roadRadar([120, 'interstate']));
console.log(roadRadar([200, 'motorway']));