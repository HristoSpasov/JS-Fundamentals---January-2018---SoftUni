// Calculate triangle area using Herons's formula

function calculateTriangleArea(a, b, c) {
    let halfPerimeter = (a + b + c) / 2;

    return Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
}

console.log(calculateTriangleArea(2, 3.5, 4));