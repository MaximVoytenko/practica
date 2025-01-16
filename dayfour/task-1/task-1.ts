type User = {
    id: number;
    name: string;
    email: string;
    age?: number;
    isActive: boolean;
};

async function cleanUserData(users: User[]): Promise<User[]> {
    if (Math.random() < 0.1) {
        throw new Error("Случайная ошибка при обработке данных пользователей.");
    }

    const cleanedUsers: User[] = [];

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        if (user.isActive) {
            cleanedUsers.push({
                ...user,
                name: user.name.trim().toLowerCase(),
                email: user.email.toLowerCase()
            });
        }
    }

    return cleanedUsers;
}

const users: User[] = [
    { id: 1, name: "  ПАвлик  ", email: "SDSD@gmail.com", isActive: true },
    { id: 2, name: "маШа", email: "DASDASD@gmail.COM", age: 25, isActive: false },
    { id: 3, name: "  Алексей ", email: "DASDAS@gmail.com", isActive: true }
];

(async () => {
    try {
        const result = await cleanUserData(users);
        console.log("Обработанные данные пользователей:", result);
    } catch (error) {
        console.error(error);
    }
})();
