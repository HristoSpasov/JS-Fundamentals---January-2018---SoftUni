function solve(arr) {
    let nthElement = Number(arr.pop());

    return arr.filter((e, i) => i % nthElement == 0).join('\n');
}

console.log(solve(['5', '20', '31', '4', '20', '2']));