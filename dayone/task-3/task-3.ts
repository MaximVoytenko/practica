function indexOf(str: string, podstr: string): number {
    for (let i = 0; i <= str.length - podstr.length; i++) {
        let found = true;

        for (let j = 0; j < podstr.length; j++) {
            if (str[i + j] !== podstr[j]) {
                found = false;
                break;
            }
        }

        if (found) return i;
    }

    return -1;
}

console.log(indexOf("privett", "vet"));
console.log(indexOf("hello world", "vet"));
