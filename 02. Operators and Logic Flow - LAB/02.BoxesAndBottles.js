function calculateRequredBoxes(bottles, boxCapacity) {
    return Math.ceil(bottles / boxCapacity);
}

console.log(calculateRequredBoxes(20, 5));
console.log(calculateRequredBoxes(15, 7));
console.log(calculateRequredBoxes(5, 10));