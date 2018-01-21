// Rotate array from to the right
function rotateArray(arr) {
    let rotations = Number(arr.pop());

    // Check if rotations are more than array size and skip unnecessary rotations
    if(rotations > arr.length){
        rotations %= arr.length;
    }

    while(rotations > 0){
        arr.unshift(arr.pop());

        rotations--;
    }

    return arr.join(' ');
}

console.log(rotateArray(['1', '2', '3', '4', '2']));
console.log(rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']));