
function time (delay: number, message: string): Promise <string> {
    return  new Promise((resolve, reject) => {
        if (typeof delay !== "number" || delay <= 0) {
            return reject(new Error('Параметр delay должен быть положительным числом'));
        }
        if (typeof message != "string") {
            return reject(new Error('Параметр massage должен строкой'));
        }

        setTimeout(() => {resolve(message)
        }, delay);

    });
}

time(3000, "dsdsdsdsdds")
    .then(result => console.log(result))
    .catch(error => console.error(error.message));




























