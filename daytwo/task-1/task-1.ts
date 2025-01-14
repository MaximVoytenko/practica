function countFilledValues (user: {name: string | null; age: number; email: string | null; password?: string | null}) {
    let count = 0;
    for (const key in user) {
        const value = user[key as keyof typeof user]
        if (value !== null && value !== undefined &&  value !== "") {
            count++;
        }
    }
    return count;
}
let data  = {
    name: null,
    age: 5,
    email: "",
    password: undefined
};

console.log(countFilledValues(data));