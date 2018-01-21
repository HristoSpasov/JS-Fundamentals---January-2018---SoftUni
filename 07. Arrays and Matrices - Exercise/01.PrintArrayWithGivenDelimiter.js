function printArray(arr) {
    let delimiter = arr.pop();

    return arr.join(delimiter);
}

console.log(printArray(['One', 'Two', 'Three', 'Four', 'Five', '-']));