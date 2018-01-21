function extractValidLinks(input) {
    const pattern = /[w]{3}\.(?:[A-Za-z0-9]+)(?:\-[A-Za-z0-9]+)*\.(?:[a-z]+)(?:\.[a-z]+)*/gi;

    let output = [];

    input.forEach(e => {
        let match = [];

        while((match = pattern.exec(e)) != null){
            output.push(match[0]);
        }
    })

    return output.join('\n');
}

console.log(extractValidLinks(['Join WebStars now for free, at www.web-stars.com', 'You can also support our partners:', 'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com', 'Sentinel - www.sentinel.-ko ']));
console.log(extractValidLinks(['Need information about cheap hotels in London?', 'You can check us at www.london-hotels.co.uk!', 'We provide the best services in London.', 'Here are some reviews in some blogs:', '"London Hotels are awesome!" - www.indigo.bloggers.com', '"I am very satisfied with their services" - ww.ivan.bg', '"Best Hotel Services!" - www.rebel21.sedecrem.moc']));