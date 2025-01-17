import * as readlineSync from "readline-sync";

const userInput: string = readlineSync.question("Vvedite Kamen, Nozhitsy ili Bumaga translitom:\n ").trim();
/*более простой вариант
const userInput: string = "Kamen";*/

const normalizedInput = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();

const generation: string[] = ["Kamen", "Nozhitsy", "Bumaga"];
let result: number = 0;
let output: string;

function play(generation: string[]): string {
    const random: string = generation[Math.floor(Math.random() * generation.length)];

    if (!generation.includes(normalizedInput)) {
        return "Ошибка: Введите Камень, Ножницы или Бумага.";
    }

    if (random === "Kamen" && normalizedInput === "Nozhitsy") {
        result += 1;
    } else if (random === "Kamen" && normalizedInput === "Bumaga") {
        result -= 1;
    } else if (random === "Bumaga" && normalizedInput === "Kamen") {
        result += 1;
    } else if (random === "Bumaga" && normalizedInput === "Nozhitsy") {
        result -= 1;
    } else if (random === "Nozhitsy" && normalizedInput === "Bumaga") {
        result += 1;
    } else if (random === "Nozhitsy" && normalizedInput === "Kamen") {
        result -= 1;
    } else {
        result = 0;
    }

    if (result === 0) {
        output = `Ничья 0_о\nИгрок выбрал: ${normalizedInput}\nКомпьютер выбрал: ${random}`;
    } else if (result === 1) {
        output = `Победу одержал компьютер((\nИгрок выбрал: ${normalizedInput}\nКомпьютер выбрал: ${random}`;
    } else if (result === -1) {
        output = `Вы выиграли))\nИгрок выбрал: ${normalizedInput}\nКомпьютер выбрал: ${random}`;
    }

    return output;
}

const res = play(generation);
console.log(res);
