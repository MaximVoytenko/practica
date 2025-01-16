type UserWithGadget = {
    id: string;
    name: string;
    gadget: {
        id: string;
        name: string;
        price: string | undefined;
    };
};

type UserWithGadgets = {
    id: string;
    name: string;
    gadgets: {
        id: string;
        name: string;
        price: string | undefined;
    }[];
};

function group(userWithGadget: UserWithGadget[]): UserWithGadgets[] {
    const grouped: { [key: string]: UserWithGadgets } = {};

    for (let i = 0; i < userWithGadget.length; i++) {
        const { id, name, gadget } = userWithGadget[i];

        if (grouped[id]) {
            grouped[id] = {
                ...grouped[id],
                gadgets: [...grouped[id].gadgets, gadget],
            };
        } else {
            grouped[id] = {
                id,
                name,
                gadgets: [gadget],
            };
        }
    }

    return Object.values(grouped);
}

const userWithGadget: UserWithGadget[] = [
    { id: "1", name: "Khalid Kashmiri", gadget: { id: "101", name: "Phone", price: "1000" } },
    { id: "2", name: "Khidir Karawita", gadget: { id: "102", name: "Tablet", price: undefined } },
    { id: "1", name: "Khalid Kashmiri", gadget: { id: "103", name: "Laptop", price: "1500" } },
];

const result = group(userWithGadget);

console.log(JSON.stringify(result, null, 2));
