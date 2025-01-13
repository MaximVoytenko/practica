function longestWord(str: string): string {
    const words = str.split(' ');

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words.length - 1 - i; j++) {
            if (words[j].length < words[j + 1].length) {
                const temp = words[j];
                words[j] = words[j + 1];
                words[j + 1] = temp;
            }
        }
    }

    return words[0];
}

console.log(longestWord("фффффффффф ыыы вввыыыыыыыыыыывв ыфыфыфы "));