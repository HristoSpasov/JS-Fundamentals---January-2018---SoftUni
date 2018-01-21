"use strict";

function generateTemplate(input){
    let result = '<?xml version="1.0" encoding="UTF-8"?>\n';
    result += '<quiz>\n';
    for (let i = 0; i < input.length; i+=2) {
        result += '  <question>\n';
        result += `    ${input[i]}\n`;
        result += '  </question>\n';
        result += '  <answer>\n';
        result += `    ${input[i + 1]}\n`;
        result += '  </answer>\n';
    }

    result += '</quiz>\n';

    return result;
}

console.log(generateTemplate(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]
));