function addAndRemove(commands) {
    let resultArr = [];
    let initialNumber = 1;

    for (let cmd of commands) {
        if(cmd == 'add'){
            resultArr.push(initialNumber);
        } else {
            if(resultArr.length > 0){
                resultArr.pop();
            }
        }

        initialNumber++;
    }

    return resultArr.length > 0 ? resultArr.join('\n') : 'Empty';
}

console.log(addAndRemove(['add', 'add', 'remove', 'add', 'add']));
console.log(addAndRemove(['remove', 'remove', 'remove', 'remove', 'remove']));
console.log(addAndRemove(['add', 'add', 'remove', 'add' ]));