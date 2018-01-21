// Capitalize all words
// Words are separated by ' '
function capitalize(str) {
    return str.split(' ').map(e => e[0].toUpperCase() + e.substring(1).toLowerCase()).join(' ');
}

console.log(capitalize('Capitaize these words'));
console.log(capitalize('Was that Easy? tRY thIs onE for SiZe!'));