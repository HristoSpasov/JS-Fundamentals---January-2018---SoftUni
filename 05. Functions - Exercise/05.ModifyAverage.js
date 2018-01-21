function modifyAverage(input) {
    const targetMinAverage = 5;

    let number = Number(input); // Parse

    // Loop while average is less than 5
    while (getAverageValue(number) <= targetMinAverage){
        number = Number(number.toString() + '9');
    }

    // Print result
    console.log(number);

    function getAverageValue(number) {
        let sum = 0;

        for (let num of number.toString()) {
            sum += Number(num);
        }

        return sum / number.toString().length;
    }
}

modifyAverage(101);
modifyAverage(5835);