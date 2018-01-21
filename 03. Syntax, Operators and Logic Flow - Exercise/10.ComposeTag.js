function composeTag(input) {
    return `<img src="${input[0]}" alt="${input[1]}">`
}

console.log(composeTag(['smiley.gif', 'Smiley Face']));