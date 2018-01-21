function calculate(input) {
    let sum = 0;
	
	for(let n of input){
        sum += n;
    }
	
    let VAT = sum * 0.20;
    let total = sum + VAT;

    // Print
    console.log('sum = ' + sum);
    console.log('VAT = ' + VAT);
    console.log('total = ' + total);
}

calculate([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445])