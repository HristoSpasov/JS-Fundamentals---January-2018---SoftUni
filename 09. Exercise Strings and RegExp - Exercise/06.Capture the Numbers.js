function captureNumbers(arr) {
    return arr.join(' ').split(/(\D+)/g).filter(e => /\d+/g.exec(e)).join(' ');
}

console.log(captureNumbers(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']));
console.log(captureNumbers(['123a456', '789b987', '654c321', '0']));
console.log(captureNumbers(['Let’s go11!!!11!', 'Okey!1!']));