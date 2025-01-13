function runLengthEncoding(str: string): string {
    let result = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i] + count;
            count = 1;
        }
    }
    return result;
}

function runLengthDecoding(encodedStr: string): string {
    let result = '';
    for (let i = 0; i < encodedStr.length; i += 2) {
        const char = encodedStr[i];
        const count = parseInt(encodedStr[i + 1], 10);
        result += char.repeat(count);
    }
    return result;
}
const encoded = runLengthEncoding("zzzllla");
console.log(encoded);
console.log(runLengthDecoding(encoded));