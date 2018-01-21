function previousMonthLastDay(input) {
    let date = new Date(input[2], input[1] - 1, input[0]);

    date.setDate(0); // Set to previous month last day

    return date.getDate();
}

console.log(previousMonthLastDay([17, 3, 2002]));