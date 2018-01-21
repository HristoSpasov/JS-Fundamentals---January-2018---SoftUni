function findEvenPositionElements(arr) {
    return arr.filter((e, i) => i % 2 == 0)
              .join(' ');
}

console.log(findEvenPositionElements(['20', '30', '40']));
console.log(findEvenPositionElements(['5', '10']));