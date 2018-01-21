function sortArray(arr) {
    return arr.sort(function(e1, e2) {
        if(e1.length != e2.length){
            return e1.length > e2.length;
        }

        return e1.toLowerCase() > e2.toLowerCase();
    }).join('\n');
}

console.log(sortArray(['alpha', 'beta', 'gamma']));
console.log(sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));