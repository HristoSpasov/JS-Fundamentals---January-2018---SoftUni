// Calculate sequence with n elements
// Each element is sum of the last k elements
function lastKNumbersFunction(n, k) {
    let resultArr = [ 1 ];

    calcElements();

    return resultArr.join(' ');

    function calcElements() {
        if (resultArr.length == n){
            return;
        }
        
        let nextElement = resultArr.reverse().slice(0, k).reduce((a, b) => a + b, 0);
        resultArr.reverse().push(nextElement);
        calcElements();
    }
}

console.log(lastKNumbersFunction(6, 3));
console.log(lastKNumbersFunction(8, 2));