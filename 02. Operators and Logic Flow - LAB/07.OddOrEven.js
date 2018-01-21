function oddOrEven(num) {
    if (num != Math.round(num)){
        return 'invalid';
    }else if(num % 2 != 0){
        return 'odd';
    }else{
        return 'even';
    }
}

console.log(oddOrEven(5));
console.log(oddOrEven(8));
console.log(oddOrEven(1.5));