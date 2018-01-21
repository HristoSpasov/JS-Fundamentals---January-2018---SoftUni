function printTriangle(n) {
    for (let i = 1; i <= n; i++){
        let line = '';

        for (let j = 1; j <= i; j++){
            line += '$';
        }

        console.log(line);
    }
}

printTriangle(3);
printTriangle(2);
printTriangle(4);