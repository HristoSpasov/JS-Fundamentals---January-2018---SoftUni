// This is modified to work with random amount of points NB !!! For 10 + points works slow !!!
function calculateShortestTripLength(input) {
    // Each point has 2 coordinates so calculate total points count
    let pointsCount = input.length / 2;

    // Each point has index starting from 1. Generate all possible paths recursively
    let pointIndices = generatePointIndices();
    let startIndex = 0;

    let vectorsString = ''; // Here will be stored all vectors separated by space
    generateVectors(pointIndices, startIndex); // Call function to generate vectors

    // Read point data
    let points = readPointData();

    // Loop over each vector and calculate distance
    let distances = {}; // Here will store all calculated distances

    let shortestPath = '';
    let shortestDistance = Infinity;

    let paths = vectorsString.trim().split(' ');
    for (let path of paths) {
        let currDistance = calculateDistance(path, points);

        if(currDistance < shortestDistance){
            shortestPath = path;
            shortestDistance = currDistance;
        }
    }

    // Print shortest distance
    let result = getResult(shortestPath, shortestDistance);

    return result;

    function getResult() {
        let formatedPath = shortestPath.trim().split(',').join('->');

        return `${formatedPath}: ${shortestDistance}`;
    }

    function calculateDistance(path, points) {
        path = path.split(',');
        let distance = 0;

        for (let i = 0; i < path.length - 1; i++) {
            // Get points by id from points array
            let p1 = points.find(p => p.id == path[i]);
            let p2 = points.find(p => p.id == path[i + 1]);

            let ind = p1.id.toString() + p2.id.toString();
            let reversedInd = p2.id.toString() + p1.id.toString();

            // Check if distance is already calculated for both directions
            if(distances[ind] != undefined){
                distance += Number(distances[ind]);
                continue;
            }

            if(distances[reversedInd] != undefined){
                distance += Number(distances[reversedInd]);
                continue;
            }

            // If not found => calculate new distance and add to distances map
            let newIndex = p1.id.toString() + p2.id.toString();
            let newDistance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
            distances[newIndex] = newDistance;
            distance += newDistance;
        }

        return distance;
    }

    function readPointData() {
        let points = new Array(pointsCount);
        let pointIndex = 1;
        for (let i = 0; i < input.length; i+=2) {
            points[pointIndex - 1] = {id: Number(pointIndex++), x: Number(input[i]), y: Number(input[i + 1])};
        }

        return points;
    }

    function generateVectors(points, startIndex) {
        if(startIndex > points.length - 1){
            vectorsString += points.toString() + ' ';
        }else{
            for (let i = startIndex; i < points.length; i++) {
                let tmp = points[i];
                points[i] = points[startIndex];
                points[startIndex] = tmp;

                generateVectors(points, startIndex + 1);

                points[startIndex] = points[i];
                points[i] = tmp;
            }
        }
    }

    function generatePointIndices() {
        let points = new Array(pointsCount);

        for (let i = 0; i < points.length; i++) {
            points[i] = i + 1;
        }

        return points;
    }
}

console.log(calculateShortestTripLength([0, 0, 2, 0, 4, 0]));
console.log(calculateShortestTripLength([5, 1, 1, 1, 5, 4]));
console.log(calculateShortestTripLength([-1, -2, 3.5, 0, 0, 2]));
console.log(calculateShortestTripLength([-1, -2, 3.5, 0, 0, 2, 0, 0, 2, 0, 4, 0, 5, 1, 1, 1, 5, 4 ]));