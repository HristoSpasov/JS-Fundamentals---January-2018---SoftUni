function assignProperties(input) {
    let output = {};

    output[input[0]] = input[1];
    output[input[2]] = input[3];
    output[input[4]] = input[5];

    return output;
}

console.log(assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']));

