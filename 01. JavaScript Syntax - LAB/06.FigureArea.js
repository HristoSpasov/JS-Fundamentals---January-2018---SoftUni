function getArea(w, h, W, H){
    return w * h + W * H - Math.min(w, W) * Math.min(h, H);
}

console.log(getArea(2, 4, 5, 3));
console.log(getArea(13, 2, 5, 8));