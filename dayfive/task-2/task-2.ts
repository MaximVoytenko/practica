function calculator(sum: number): { [key: number]: number } {
    const array: number[] = [100, 50, 10, 5, 2, 1];
    let myObject: { [key: number]: number } = {};  // Исправлено на number

    for (let i = 0; i < array.length; i++) {
        let numberBanknotes = Math.floor(sum / array[i]);
        if (numberBanknotes > 0) {
            myObject[array[i]] = numberBanknotes;
        }

        sum = sum - numberBanknotes * array[i];
    }
    return result;
}

let result = calculator(123);
console.log(result);
