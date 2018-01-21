function uniqueUserNames(nameArr) {
    return [...new Set(nameArr.sort((a, b) => {
        if ([...a].length > [...b].length) return 1;
        if ([...a].length < [...b].length) return -1;
        if ([...a].length === [...b].length) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        }
    }))].join('\n');
}

console.log(uniqueUserNames([
    'Denise',
    'Ignatiu',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatllo',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
]));