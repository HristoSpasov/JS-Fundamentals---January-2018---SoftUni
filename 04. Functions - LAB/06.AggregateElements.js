"use strict";

function run(arr){
    // Execute function
    function execute(arr, initial, func) {
        for (let i = 0; i < arr.length; i++) {
            initial = func(initial, arr[i]);
        }
        return initial;
    }

    // Functions
    let sumFunc = (a, b) => a + b;
    let sumInverseFunc = (a, b) => a + 1/ b;
    let concatElementsFunc = (a, b) => a.toString() + b;

    // Result
    console.log(execute(arr, 0, sumFunc));
    console.log(execute(arr, 0, sumInverseFunc));
    console.log(execute(arr, '', concatElementsFunc));
}

console.log(run([1, 2, 3]));
console.log(run([2, 4, 8, 16]));