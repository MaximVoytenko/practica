type User = {
    id: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: "active" | "delete";
};

async function fakeApi(delay: number): Promise<User[]> {
    const fakeData: User[] = [
        {
            id: "11",
            name: "Иван Иванов",
            phone: "+7 (999) 999-99-99",
            email: "ivan.ivanov@gmail.com",
            location: "Томск",
            status: "active",
        }
    ];

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fakeData);
        }, delay);
    });
}

(async () => {
    console.log("Подготовка данных...");
    const response = await fakeApi(4000);
    console.log("Получено:", response);
})();
