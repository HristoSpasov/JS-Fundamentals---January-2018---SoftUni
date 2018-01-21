function extract(arr){
    let currMin = Number.MIN_SAFE_INTEGER;

    return arr.filter(n => {
        if (n >= currMin){
            currMin = n;
            return true;
        }

        return false;
    }).join('\n');
}

console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));