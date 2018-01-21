function insideOrOutside([x, y, xMin, xMax, yMin, yMax]) {
    let isInside = x >= xMin && x <= xMax && y >= yMin && y <= yMax;

    return isInside ? 'inside' : 'outside';
}

console.log(insideOrOutside([8 ,-1, 2, 12, -3, 3]));
console.log(insideOrOutside([12.5, -1, 2, 12, -3, 3]));