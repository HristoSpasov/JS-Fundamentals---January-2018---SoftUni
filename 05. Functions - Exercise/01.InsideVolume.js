function insideOrOutside(input) {
    const xMin = 10;
    const xMax = 50;
    const yMin = 20;
    const yMax = 80;
    const zMin = 15;
    const zMax = 50;

    // Loop over the points and print if point is inside or outside figure
    for (let i = 0; i < input.length; i+=3) {
        let currX = input[i];
        let currY = input[i + 1];
        let currZ = input[i + 2];

        if (currX >= xMin && currX <= xMax && currY >= yMin && currY <= yMax && currZ >= zMin && currZ <= zMax){
            console.log('inside');
        }else {
            console.log('outside');
        }
    }
}

console.log(insideOrOutside([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]));
console.log(insideOrOutside([8, 20, 22]));
