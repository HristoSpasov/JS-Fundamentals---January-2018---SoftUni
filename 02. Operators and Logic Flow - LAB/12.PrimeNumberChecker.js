function primeNumberChecker(num) {
    if (num <= 1){
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i == 0){
            return false;
        }
    }

    return true;
}

console.log(primeNumberChecker(7));
console.log(primeNumberChecker(8));
console.log(primeNumberChecker(81));