function nowPlaying(input) {
    let name = input[0];
    let artist = input[1];
    let duration = input[2];

    return `Now Playing: ${artist} - ${name} [${duration}]`;
}

console.log(nowPlaying(['Number One', 'Nelly', '4:09']));