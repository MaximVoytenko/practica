function identicalLetters(line1: string, line2: string): string {
    const set1 = new Set(line1);
    const set2 = new Set(line2);
    const common = new Set([...set1].filter(x => set2.has(x)));
    return Array.from(common).join('');
}

console.log(identicalLetters("abfdfdfc", "asdsfsdfsd"));



