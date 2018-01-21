function gradsToDegrees(grads) {
    if (Math.abs(grads) > 400){
        grads %=  400;
    }

    let degrees = 360 * grads / 400;

    if(degrees == 360){
        return 0;
    }

    if(degrees < 0){
        return degrees + 360;
    }

    return degrees;
}

console.log(gradsToDegrees(100));
console.log(gradsToDegrees(400));
console.log(gradsToDegrees(850));
console.log(gradsToDegrees(-50));